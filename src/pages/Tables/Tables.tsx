import Table from "../../components/Table/Table";
import { useAppDispatch } from "../../hooks/redux";

import { switchTable, openModal } from "../../redux/actions";
import {
  getActiveTable,
  getActiveTask,
  getArchivedTask,
} from "../../redux/selectors/tableSelectors";

import { Categories } from "../../types/Categories";
import { eTables } from "../../types/tables";

import style from "./Tables.module.css";

const Tables = () => {
  const dispatch = useAppDispatch();

  const activeTable = getActiveTable();

  const activeTableRows = getActiveTask();
  const archivedTableRows = getArchivedTask();

  const rows =
    activeTable === "activeTable" ? activeTableRows : archivedTableRows;

  const pivotTableRows = Object.values(Categories).map((elem) => {
    const activeTaskValue = activeTableRows.filter(
      (filterElem) => filterElem.category === elem
    ).length;

    const archivedTaskValue = archivedTableRows.filter(
      (filterElem) => filterElem.category === elem
    ).length;

    return {
      categories: elem,
      active: activeTaskValue,
      archived: archivedTaskValue,
    };
  });

  const createNoteButtonHandler = () => {
    dispatch(openModal());
  };

  const switchButtonLabel: string =
    activeTable === "activeTable"
      ? "Watch archived notes"
      : "Watch active notes";

  const switchButtonHandler = () => {
    dispatch(switchTable());
  };

  return (
    <>
      <Table tableName={activeTable} rows={rows} />

      <div className={style.create_button_wrapper}>
        <button
          className={style.add_task__button}
          onClick={createNoteButtonHandler}
        >
          Create Note
        </button>
      </div>
      <Table tableName={eTables.PivotTable} rows={pivotTableRows} />
      <div className={style.switch_button_wrapper}>
        <button className={style.switch_button} onClick={switchButtonHandler}>
          {switchButtonLabel}
        </button>
      </div>
    </>
  );
};

export default Tables;
