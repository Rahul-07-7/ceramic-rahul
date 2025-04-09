import React, { useState } from "react";
import Button from "./Button";
import Loader from "./Loader";

function Product({ id, img, productName, price, addToCart }) {
  const [showLoader, setShowLoader] = useState(false);

  const handleCartClick = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);

      addToCart({ id, img, productName, price });
    }, 1000);
  };
  return (
    <div className="">
      {showLoader && <Loader />}

      <div className="product">
        <img src={img} alt={productName} height={"400px"} />
        <span> {productName}</span>
        <h4>₹ {price} /- </h4>
        <button onClick={handleCartClick} className="main-button mb-5">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
