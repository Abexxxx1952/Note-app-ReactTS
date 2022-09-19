import { closeModal, editFieldsValues, editModOff } from "../../redux/actions";
import { useAppDispatch } from "../../hooks/redux";

import { Categories } from "../../types/Categories";

import style from "./ModalOverlay.module.css";

const ModalOverlay = () => {
  const dispatch = useAppDispatch();

  const closeModalHandler = () => {
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
    <div className={style.modal_overlay} onClick={closeModalHandler}></div>
  );
};

export default ModalOverlay;
