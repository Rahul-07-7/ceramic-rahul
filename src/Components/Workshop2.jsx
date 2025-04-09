import React, { useState } from "react";
import Loader from "./Loader";

function Workhop2({ img, title, text, price, id, productName, addToCart }) {
  const [showLoader, setShowLoader] = useState(false);

  const handleCartClick = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      addToCart({ id, img, productName, price });
    }, 1000);
  };

  return (
    <div>
      {showLoader && <Loader />}
      <div className="container mt-5">
        <div className="workshop-1 ">
          <div>
            <h1>{title}</h1>
            <p className="pb-5">{text} </p>
            <div className="d-flex gap-5 btns">
              <button className="main-button" onClick={handleCartClick}>
                Subscribe
              </button>
              <p className="mt-2 btn-p">Show more</p>
            </div>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workhop2;
