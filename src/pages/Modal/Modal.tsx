import React from "react";
import ModalOverlay from "../../components/ModalOverlay/ModalOverlay";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

import style from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={style.modal_wrapper}>
      <ModalWindow />
      <ModalOverlay />
    </div>
  );
};

export default Modal;
