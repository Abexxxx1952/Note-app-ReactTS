import { getAppSelector } from "../../hooks/redux";
import { RootState } from "../store";

export function getActiveTask(state: RootState) {
  return getAppSelector(state.modal.openModalFlag);
}
