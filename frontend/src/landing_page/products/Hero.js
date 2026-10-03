import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="text-center mt-5 p-3">
        <h3 className="mt-4">Zerodha Products</h3>
        <h5 className="mt-3 mb-4 text-muted">
          Sleek, modern, and intutive trading platforms
        </h5>
        <p className="mt-3 mb-5">
          Check out our&nbsp;
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings&nbsp;&nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
      <hr
        style={{
          width: "85%",
          margin: "auto",
          marginTop: "60px",
          color: "#b2b2b2",
        }}
      />
    </div>
  );
}

export default Hero;
