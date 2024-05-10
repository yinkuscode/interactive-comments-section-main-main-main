// App.js
import React, { useState } from "react";
import Modals from "./Modal2";

function Mos() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    console.log("modal is opened");
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    console.log("modal is closed");
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modals isOpen={isOpen} onClose={handleCloseModal}>
        <h1>Modal Content</h1>
        <p>This is the content of the modal.</p>
      </Modals>
    </div>
  );
}

export default Mos;
