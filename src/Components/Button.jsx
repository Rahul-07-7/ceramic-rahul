import React from "react";

function Button({ name }) {
  return (
    <div>
      <button className="main-button"> {name} </button>
    </div>
  );
}

export default Button;
