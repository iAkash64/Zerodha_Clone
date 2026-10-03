import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 p-5">
          <img src="media/images/largestBroker.svg" className="img-fluid"></img>
        </div>

        <div className="col-12 col-md-6 p-5 mt-4">
          <h2>Largest stock broker in India</h2>

          <p className="mt-3 mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row mb-3">
            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity and derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Gov. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            className="img-fluid"
            style={{ width: "90%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
