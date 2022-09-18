import { getAppSelector } from "../../hooks/redux";
import { RootState } from "../store";

export function getModalFlag() {
  return getAppSelector((state: RootState) => state.modal.openModalFlag);
}
