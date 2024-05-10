import React from "react";
import ramsesmiron from "../../assets/avatars/image-ramsesmiron.png";
import Textarea from "./Textarea";
import { section1Array } from "../../utilis";
import Button from "../button/Button";
import { useState } from "react";
import { section2Arry } from "../../utilis";
import maxblagun from "../../assets/avatars/image-maxblagun.png";
function Input(props) {
  const [value, setValue] = useState("");
  const handle = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    const item = {
      id: 20,
      image: maxblagun,
      name: value,
      date: "2 weeks ago",
      link: "www.youtube.com",
      body: "We are learning",
      flag: true,
    };
    props.setItems([...props.items, item]);
    setValue("");
  };
  return (
    <div className=" hidden md:bg-white md:flex md:justify-between md:min-h-150px md:rounded md:shadow-sm md:shadow-gray-500 md:mt-3 md:py-2 md:px-7">
      <img
        src={ramsesmiron}
        alt="User Avatar"
        className=" md:visible md:w-11 md:rounded-full md:mr-4 md:self-start"
      />

      <Textarea value={value} handleChange={(e) => handle(e)} />
      <button
        onClick={handleSubmit}
        className="ml-4 px-6 py-3 self-start bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        SEND
      </button>
    </div>
  );
}

export default Input;
