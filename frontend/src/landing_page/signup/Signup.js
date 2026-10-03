import { useState } from "react";

function Signup() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mobileNumber.length !== 10) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setMessage("Mobile number accepted. Connect an OTP service next.");
  };

  return (
    <main className="zerodha-signup-page">
      <section className="signup-heading">
        <h1>Open a free demat and trading account online</h1>
        <p>
          Start investing brokerage free and join a community of 1.8+ crore
          investors and traders
        </p>
      </section>

      <section className="container signup-content">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center">
            <img
              src="/media/images/signup.png"
              alt="Zerodha trading platforms"
              className="zerodha-signup-image"
            />
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="otp-form-container">
              <h2>Signup now</h2>
              <p>Or track your existing application</p>

              <form onSubmit={handleSubmit}>
                <div className="mobile-input">
                  <span className="country-code">🇮🇳 +91</span>

                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(event) =>
                      setMobileNumber(event.target.value.replace(/[^0-9]/g, ""))
                    }
                    maxLength="10"
                    required
                  />
                </div>

                <button type="submit">Get OTP</button>
              </form>

              {message && <p className="otp-message">{message}</p>}

              <p className="terms-text">
                By proceeding, you agree to the Zerodha{" "}
                <a href="#terms">terms</a> &amp;{" "}
                <a href="#privacy">privacy policy</a>
              </p>

              <hr />

              <p className="nri-text">
                Looking to open NRI account? <a href="#nri">Click here</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="existing-account">
        <h2>Already have a demat account?</h2>
        <p>
          Move your holdings to Zerodha and we'll cover your transfer costs, up
          to ₹500, <a href="#learn-more">learn more.</a>
        </p>
      </section>
    </main>
  );
}

export default Signup;
