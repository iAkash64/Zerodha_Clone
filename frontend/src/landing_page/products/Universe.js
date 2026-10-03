import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h4 style={{ marginTop: "90px" }}>The Zerodha Universe</h4>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5 pl-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="fund house"
            style={{ width: "50%" }}
          ></img>
          <p
            className="text-small text-muted mt-3"
            style={{ fontSize: "12px" }}
          >
            Our asset management venture <br></br> that is creating simple and
            transparent index <br></br> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "50%" }}
          ></img>
          <p
            className="text-small text-muted mt-4"
            style={{ fontSize: "12px" }}
          >
            Options trading platform that lets you <br></br> create strategies,
            analyze positions, and examine <br></br> data points like open
            interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/tijoriLogo.svg"
            style={{ width: "35%", marginTop: "35px" }}
          ></img>
          <p
            className="text-small text-muted mt-3"
            style={{ fontSize: "12px" }}
          >
            Investment research platform <br></br> that offers detailed insights
            on stocks, <br></br> sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "45%" }}></img>
          <p
            className="text-small text-muted mt-3"
            style={{ fontSize: "12px" }}
          >
            Systematic trading platform <br></br> that allows you to create and
            backtest <br></br> strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "50%" }}
          ></img>
          <p
            className="text-small text-muted mt-3"
            style={{ fontSize: "12px" }}
          >
            Thematic investing platform <br></br> that helps you invest in
            diversified <br></br> baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }}></img>
          <p
            className="text-small text-muted mt-3"
            style={{ fontSize: "12px" }}
          >
            Personalized advice on life <br></br> and health insurance. No spam{" "}
            <br></br>
            and no mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-6 mt-3 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup now
        </button>{" "}
      </div>
    </div>
  );
}

export default Universe;
