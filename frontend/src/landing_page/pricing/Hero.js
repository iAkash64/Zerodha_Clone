import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h2>Pricing</h2>
        <h4 className="mt-3 text-muted fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h4>
      </div>

      <div className="row p-4 text-center">
        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            className="img-fluid"
            style={{ width: "250px" }}
          ></img>
          <h2 className="mt-4 fs-3">Free equity delivery</h2>
          <p className="mt-4 text-muted">
            All equity delviery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/intradayTrades.svg"
            className="img-fluid"
            style={{ width: "250px" }}
          ></img>
          <h2 className="mt-4 fs-3">Intraday and F&O trades</h2>
          <p className="mt-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            className="img-fluid"
            style={{ width: "250px" }}
          ></img>
          <h2 className="mt-4 fs-3">Free direct MF</h2>
          <p className="mt-4 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
