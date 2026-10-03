import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 p-4">
          {/* <h3 style={{ marginTop: "106px" }}>{productName}</h3> */}
          <h3 className="product-title">{productName}</h3>
          <p className="mt-4" style={{ lineHeight: "2" }}>
            {productDescription}
          </p>

          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More &nbsp;&nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          {/* <img
            src={imageURL}
            style={{ marginLeft: "130px", marginTop: "80px" }}
          ></img> */}
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid product-image"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
