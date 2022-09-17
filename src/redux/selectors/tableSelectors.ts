import { getAppSelector } from "../../hooks/redux";
import { RootState } from "../store";

export function getActiveTask(state: RootState) {
  return getAppSelector(state.table.activeTask);
}

export function getArchivedTask(state: RootState) {
  return getAppSelector(state.table.archivedTask);
}
export function getActiveTable(state: RootState) {
  return getAppSelector(state.table.activeTable);
}
export function getOpenModalFlag(state: RootState) {
  return getAppSelector(state.table.openModalFlag);
}
