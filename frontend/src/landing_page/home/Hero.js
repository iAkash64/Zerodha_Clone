import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Investment dashboard preview"
          className="img-fluid mb-5"
        />
        <h2 className="mt-5">Invest in everything</h2>
        <p className="mt-2">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          type="button"
          className="p-2 btn btn-primary fs-6 mt-3 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
          onClick={() => {
            window.location.assign("/signup");
          }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
