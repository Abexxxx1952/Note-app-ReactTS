import React from "react";
import ModalOverlay from "../../components/ModalOverlay/ModalOverlay";
import ModalWindow from "../../components/Modalwindow/ModalWindow";

import style from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={style.modal_wrapper}>
      <ModalOverlay />
      <ModalWindow />
    </div>
  );
};

export default Modal;
