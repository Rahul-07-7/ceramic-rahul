import React from "react";

function Blogtext({ h3, p1, p2, span }) {
  return (
    <div>
      <h3>{h3} </h3>
      <p className="text-muted"> {p1}</p>
      <p>{p2} </p>
      <span> {span}</span>
    </div>
  );
}

export default Blogtext;
