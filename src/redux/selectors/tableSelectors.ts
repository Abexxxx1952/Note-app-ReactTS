import { getAppSelector } from "../../hooks/redux";
import { RootState } from "../store";

export function getActiveTask() {
  return getAppSelector((state: RootState) => state.table.activeTask);
}

export function getArchivedTask() {
  return getAppSelector((state: RootState) => state.table.archivedTask);
}
export function getActiveTable() {
  return getAppSelector((state: RootState) => state.table.activeTable);
}
