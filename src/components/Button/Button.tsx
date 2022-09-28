import { FC } from "react";

import style from "./Button.module.css";

interface IButtonProps {
  children: string;
  modalButtonHandler: () => void;
}

const ModalOverlay: FC<IButtonProps> = ({
  children,
  modalButtonHandler,
}: IButtonProps) => {
  return (
    <button className={style.add_btn} onClick={modalButtonHandler}>
      {children}
    </button>
  );
};

export default ModalOverlay;
