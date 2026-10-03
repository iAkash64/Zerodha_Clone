import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6 mt-5">
          <img
            src="media/images/education.svg"
            className="img-fluid"
            style={{ width: "70%" }}
          ></img>
        </div>
        <div className="col-12 col-md-6 mt-5">
          <h1 className="fs-2 mt-5">Free and open market education</h1>
          <p className="mt-5 mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            Versity &nbsp;&nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-5 mb-4">
            TradinQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            TradingQ&A &nbsp;&nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
