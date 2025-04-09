import React from "react";

function Button(props) {
  const { name } = props;
  return (
    <div>
      <button className="main-button"> {props.name} </button>
    </div>
  );
}

export default Button;
