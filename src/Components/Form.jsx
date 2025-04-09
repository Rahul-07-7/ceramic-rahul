import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    formRef.current.reset();
  };

  useEffect(() => {
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  });

  return (
    <div>
      <form action="" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="">First name: </label>
        <input type="text" placeholder="Name" className="w-100" required />
        <label htmlFor="" className="mt-3">
          Your email:
        </label>
        <input
          type="email"
          placeholder="your@gmail.com"
          className="w-100"
          required
        />
        <label htmlFor="" className="mt-3">
          Message:
        </label>
        <textarea
          type="text"
          placeholder="Hii There ....."
          className="w-100"
          required
        />
        <div className="mt-2 text-center">
          {submitted ? (
            <input
              className="form-sent"
              type="text"
              readOnly
              value={"The Form has been sent - Thank you"}
            />
          ) : (
            <Button name={"Send"} />
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
