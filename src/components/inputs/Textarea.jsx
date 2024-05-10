import React from "react";

function Textarea(props) {
  return (
    <div className="">
      <textarea
        className={`border-2 w-[30rem] h-24 rounded-md p-4 ${props.className} `}
        name=""
        id=""
        onChange={props.handleChange}
        value={props.value}
      >
        {props.children}
      </textarea>
    </div>
  );
}

export default Textarea;
