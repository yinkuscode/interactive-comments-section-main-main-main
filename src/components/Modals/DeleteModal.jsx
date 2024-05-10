import React from "react";
import Button from "../button/Button";
import { section2Arry } from "../../utilis";
import { useState } from "react";

function DeleteModal(props) {
  const { showModal, id, close, setShowModal, items, setItems } = props;
  const item = section2Arry[id];

  const deleteItemFromArray = (id) => {
    const updatedItem = items?.filter((item) => item.id !== id);
    setItems(updatedItem);
    setShowModal(false);
  };
  console.log(items);

  return (
    <>
      {showModal === true ? (
        <div>
          <div className="flex justify-center items-center  ">
            <div className="fixed overflow-hidden inset-0 bg-black bg-opacity-30 backdrop-blur-sm max-w-96 flex flex-col justify-center items-center">
              <section className="rounded-lg flex flex-col justify-center  bg-white w-80 p-5 ">
                <h3 className="cursor-pointer">Delete Comment</h3>
                <p className="text-grayishBlue  text-start mt-3">{item.body}</p>
                <div className="flex  mt-3 gap-7 mb-3">
                  <Button
                    className="bg-red-500 px-3 py-1 text-white rounded"
                    text="Yes Delete"
                    onClick={() => deleteItemFromArray(id)}
                  />
                  <Button
                    className="bg-gray-500 px-6 py-1 text-white rounded"
                    text="No Cancel"
                    onClick={close}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default DeleteModal;
