import { useEffect, useState } from "react";
import axios from "axios";

// import { positions } from "../data/data";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPositions() {
      try {
        const response = await axios.get(`${API_BASE_URL}/allPositions`);
        setAllPositions(response.data);
      } catch (error) {
        setError("Could not load positions. Please try again later.");
      }
    }

    loadPositions();
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      {error && <p className="api-error">{error}</p>}

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
