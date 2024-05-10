import React from "react";
import { section1Array } from "../../utilis";
import plus from "../../assets/icon-plus.svg";
import minus from "../../assets/icon-minus.svg";
import reply from "../../assets/icon-reply.svg";

function Section1() {
  return (
    <div className="flex flex-col gap-3">
      {section1Array?.map((item, index) => {
        return (
          <div key={index}>
            {
              <div className=" bg-white  block md:flex items-center  bg-white-500 bg-white-500 p-5 shadow-sm shadow-gray-500 rounded-lg gap-2">
                <div className=" hidden md:block md:bg-lightGray md:p-4 py-5 md:rounded-lg md:mr-3  ">
                  <img src={plus} alt="" className="pb-2 cursor-pointer" />
                  <p className="">4</p>
                  <img src={minus} alt="" className="pt-2 cursor-pointer" />
                </div>
                <div className="  text-start">
                  <div className=" flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt="user img"
                          className="w-10   "
                        />
                        <span className=" text-darkBlue pr-2 pl-2 font-medium">
                          {item.details}
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:visible md:flex md:items-center ">
                      <img src={reply} alt="" className="cursor-pointer" />
                      <h2 className="pl-3 text-blue-500">Reply</h2>
                    </div>
                  </div>
                  <p className="text-grayishBlue text-[13px] py-2">
                    {item.body}
                  </p>
                </div>
                <div className=" mt-4 flex justify-between md:hidden">
                  <div className="flex justify-between items-center bg-lightGray py-3 px-5 rounded-lg  mr-3">
                    <img src={plus} alt="" className="pr-3 cursor-pointer" />
                    <h2>4</h2>
                    <img src={minus} alt="" className="pl-3 cursor-pointer" />
                  </div>
                  <div className="flex items-center">
                    <img src={reply} alt="" className="cursor-pointer" />
                    <h2 className="pl-3 text-blue-500">Reply</h2>
                  </div>
                </div>
              </div>
            }
          </div>
        );
      })}
    </div>
  );
}

export default Section1;
