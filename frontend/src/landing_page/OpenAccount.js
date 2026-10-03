import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h2 className="mt-5">Open a Zerodha account</h2>
        <p className="mt-2">
          Modern plateforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-6 mt-3 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
