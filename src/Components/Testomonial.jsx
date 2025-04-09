import React from "react";

function Testomonial({ img, name, pera }) {
  return (
    <div>
      <div className="testomonial">
        <img src={img} alt="" />
        <h3> {name} </h3>
        <p> {pera}</p>
      </div>
    </div>
  );
}

export default Testomonial;
