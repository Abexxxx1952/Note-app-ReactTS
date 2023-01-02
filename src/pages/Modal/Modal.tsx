import { FC } from "react";
import ModalOverlay from "../../components/ModalOverlay/ModalOverlay";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

import style from "./Modal.module.css";

const Modal: FC = () => {
  return (
    <div className={style.modal_wrapper}>
      <ModalWindow />
      <ModalOverlay />
    </div>
  );
};

export default Modal;
