import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Form() {
  const [msg, setmsg] = useState("");
  function handleClick() {
    setmsg("Button Clicked");
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me!
      </button>
      <p>{msg}</p>
    </div>
  );
}

export default Form;
