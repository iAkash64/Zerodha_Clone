import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8">
          {/* <img
            src={imageURL}
            style={{ marginLeft: "160px", marginTop: "80px" }}
          ></img> */}
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid product-image"
          />
        </div>

        <div className="col-12 col-lg-4 p-4">
          {/* <h3 style={{ marginTop: "106px" }}>{productName}</h3> */}
          <h3 className="product-title">{productName}</h3>
          <p className="mt-4" style={{ lineHeight: "2" }}>
            {productDescription}
          </p>

          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo &nbsp;&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "70px", textDecoration: "none" }}
            >
              Learn More &nbsp;&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "20px" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
