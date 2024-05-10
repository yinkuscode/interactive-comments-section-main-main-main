import React from "react";

function Modal({ isModalOpen, setIsModalOpen, children }) {
  return (
    <div className="flex justify-center items-center  ">
      <div className="fixed overflow-hidden inset-0 bg-black bg-opacity-30 backdrop-blur-sm max-w-96 flex flex-col justify-center items-center">
        <section className="rounded-lg flex flex-col justify-center  bg-white w-80 p-5 ">
          <h3 className="cursor-pointer">Delete Comment</h3>
          <p className="text-grayishBlue  text-start mt-3">
            Are you sure you want to delete this comment?This will remove the
            comment and it can't be undone
          </p>
          <div className="flex  mt-3 gap-7 mb-3">
            <button className="bg-gray-500 px-3 py-1  text-white rounded">
              No, Cancel
            </button>
            <button className="bg-red-500 px-3 py-1 text-white rounded">
              Yes, Delete
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Modal;
