import React from "react";

const ProductBox = ({ image, title }) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{title}</h2>
        <button className="productbox-button">Order Now</button>
      </div>
    </div>
  );
};

export default ProductBox;
