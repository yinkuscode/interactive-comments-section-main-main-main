import React from "react";
// import ramsesmiron from "../assets/avatars/image-ramsesmiron.png";

function InputMobile() {
  return (
    <div>
      <div className="md:hidden mt-3 bg-white  min-h-150px md:rounded shadow-sm shadow-gray-500  py-3 px-5 x ">
        <textarea
          type="text"
          placeholder="Add a comment..."
          className="border-2 border-lightGray w-[20rem] h-24 "
        ></textarea>
        <div className=" pt-3 flex justify-between items-center">
          {/* <img src={ramsesmiron} alt="User Avatar" className=" " /> */}
          <button className=" px-3 py-1  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputMobile;
