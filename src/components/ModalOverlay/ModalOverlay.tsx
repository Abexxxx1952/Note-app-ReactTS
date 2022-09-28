import { FC } from "react";

import style from "./ModalOverlay.module.css";

interface IModalOverlayProps {
  bgColor?: string;
  closeModalHandler: () => void;
}

const ModalOverlay: FC<IModalOverlayProps> = ({
  bgColor,
  closeModalHandler,
}: IModalOverlayProps) => {
  return (
    <div
      className={
        bgColor === "blue"
          ? `${style.modal_overlay} ${style.modal_overlay_bgBlue}`
          : `${style.modal_overlay}`
      }
      onClick={closeModalHandler}
    ></div>
  );
};

export default ModalOverlay;
