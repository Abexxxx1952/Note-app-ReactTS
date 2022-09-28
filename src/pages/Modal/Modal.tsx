import { FC } from "react";
import ModalOverlay from "../../components/ModalOverlay/ModalOverlay";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

import { closeModal, editFieldsValues, editModOff } from "../../redux/actions";
import { useAppDispatch } from "../../hooks/redux";
import { Categories } from "../../types/Categories";

import style from "./Modal.module.css";

const Modal: FC = () => {
  const dispatch = useAppDispatch();

  const closeModalHandler = (): void => {
    dispatch(closeModal());
    dispatch(editModOff());
    dispatch(
      editFieldsValues({
        id: 0,
        name: "",
        creation_time: "",
        category: Categories.Task,
        content: "",
        dates: "",
      })
    );
  };

  return (
    <div className={style.modal_wrapper}>
      <ModalWindow />
      <ModalOverlay closeModalHandler={closeModalHandler} />
    </div>
  );
};

export default Modal;
