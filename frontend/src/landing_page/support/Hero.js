import React from "react";

function Hero() {
  return (
    <section className="container-fluid p-5" id="supportHero">
      <div className="pt-2 pb-5" id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>

      <div className="row p-2" id="heroContent">
        <div className="col-6 px-5">
          <h4>
            Search for an answer or browse help topics <br />
            to create a ticket
          </h4>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected.."></input>

          {/* In links ko ek alag div mein wrap kiya hai margin ke sath */}
          <div className="hero-links mt-3">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <br />
            <a href="">Kite user manual</a>
          </div>
        </div>

        <div className="col-6 px-5" id="supportFeature">
          <h4>Featured</h4>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
