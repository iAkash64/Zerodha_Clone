import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 border-top">
        <h2 className="text-center mt-5" style={{ color: "#424242" }}>
          People
        </h2>
      </div>

      <div className="row p-3">
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <p className="mt-3 text-muted">Founder, CEO</p>
        </div>
        <div className="col-12 col-md-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on &nbsp;
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            &nbsp;/&nbsp;
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>
            &nbsp;/&nbsp;
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
