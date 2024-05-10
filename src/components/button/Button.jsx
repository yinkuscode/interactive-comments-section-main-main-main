import React from "react";

function Button(props) {
  return (
    <button
      className={`ml-6 mr-6 ${props.className}`}
      disabled={props.disabled}
      {...props}
    >
      {props.text}
    </button>
  );
}

export default Button;
