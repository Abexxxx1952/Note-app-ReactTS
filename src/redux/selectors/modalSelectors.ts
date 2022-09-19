import { getAppSelector } from "../../hooks/redux";
import { RootState } from "../store";

export function getModalFlag() {
  return getAppSelector((state: RootState) => state.modal.openModalFlag);
}

export function getEditFlag() {
  return getAppSelector((state: RootState) => state.modal.editModalFlag);
}

export function getFieldsValues() {
  return getAppSelector((state: RootState) => state.modal.fieldsValues);
}
