import { FC, MouseEvent } from "react";
import { INote } from "../../types/note";
import { eTables } from "../../types/tables";
import { IPivot } from "../../types/pivot";
import { ActiveTable } from "../../types/activeTable";

import {
  activeTableHeaders,
  archivedTableHeaders,
  pivotTableHeaders,
  activeTableIcons,
  archiveTableIcons,
} from "../../utils/constant";

import { useAppDispatch } from "../../hooks/redux";
import {
  removeActiveNote,
  removeArchivedNote,
  archiveNote,
  unzipNote,
  openModal,
  editModOn,
  editFieldsValues,
} from "../../redux/actions";

import style from "./Table.module.css";

interface IMyTableProps {
  tableName: ActiveTable | eTables;
  rows: Array<INote> | Array<IPivot>;
}

const Table: FC<IMyTableProps> = ({ tableName, rows }: IMyTableProps) => {
  const dispatch = useAppDispatch();

  const deleteActiveNote = (id: INote["id"]) => {
    dispatch(removeActiveNote(id));
  };
  const deleteArchivedNote = (id: INote["id"]) => {
    dispatch(removeArchivedNote(id));
  };
  const archiveActiveNote = (id: INote["id"]) => {
    dispatch(archiveNote(id));
  };
  const unzipArchivedNote = (id: INote["id"]) => {
    dispatch(unzipNote(id));
  };
  const editActiveNote = (note: INote) => {
    dispatch(openModal());
    dispatch(editModOn());
    dispatch(editFieldsValues(note));
  };

  const clickIconHandler = (e: any, note: INote) => {
    console.log(e.target);
    if (e.target.alt === "trash_icon" && tableName === "activeTable") {
      deleteActiveNote(note.id);
    }
    if (e.target.alt === "trash_icon" && tableName === "archivedTable") {
      deleteArchivedNote(note.id);
    }
    if (e.target.alt === "archive_icon") {
      archiveActiveNote(note.id);
    }
    if (e.target.alt === "unzip_icon") {
      unzipArchivedNote(note.id);
    }
    if (e.target.alt === "edit_icon") {
      editActiveNote(note);
    }
  };

  return (
    <div className={style.activeTable_table}>
      {/* -------- Table header start ------------ */}
      <div className={style.activeTable_table_header}>
        {tableName === "activeTable" &&
          activeTableHeaders.map((elem) => {
            return (
              <div
                className={
                  eTables.ActiveTable && style.activeTable_table_header__item
                }
                key={elem}
              >
                {elem}
              </div>
            );
          })}

        {tableName === "archivedTable" &&
          archivedTableHeaders.map((elem) => {
            return (
              <div
                className={
                  eTables.ArchivedTable &&
                  style.archivedTable_table_header__item
                }
                key={elem}
              >
                {elem}
              </div>
            );
          })}
        {tableName === "pivotTable" &&
          pivotTableHeaders.map((elem) => {
            return (
              <div
                className={
                  eTables.PivotTable && style.pivotTable_table_header__item
                }
                key={elem}
              >
                {elem}
              </div>
            );
          })}
      </div>
      {/* ---------- Table header end ------------*/}

      <div>
        {/* --------- Table rows start ---------- */}
        {(tableName === "activeTable" || tableName === "archivedTable") &&
          (rows as Array<INote>).map((elem) => {
            return (
              <div
                className={
                  (eTables.ActiveTable || eTables.ArchivedTable) &&
                  style.activeTable_table_row
                }
                key={elem.id}
              >
                <div
                  className={
                    (eTables.ActiveTable || eTables.ArchivedTable) &&
                    style.activeTable_table_row__item
                  }
                >
                  {elem.name}
                </div>
                <div
                  className={
                    (eTables.ActiveTable || eTables.ArchivedTable) &&
                    style.activeTable_table_row__item
                  }
                >
                  {elem.creation_time}
                </div>
                <div
                  className={
                    (eTables.ActiveTable || eTables.ArchivedTable) &&
                    style.activeTable_table_row__item
                  }
                >
                  {elem.category}
                </div>
                <div
                  className={
                    (eTables.ActiveTable || eTables.ArchivedTable) &&
                    style.activeTable_table_row__item
                  }
                >
                  {elem.content}
                </div>
                <div
                  className={
                    (eTables.ActiveTable || eTables.ArchivedTable) &&
                    style.activeTable_table_row__item
                  }
                >
                  {elem.dates}
                </div>
                {/* ------- Table icons section start ------ */}
                {tableName === "activeTable" && (
                  <div
                    className={
                      eTables.ActiveTable && style.activeTable_table_row__item
                    }
                    onClick={(e) => {
                      clickIconHandler(e, elem);
                    }}
                  >
                    {activeTableIcons.map((elem) => {
                      return (
                        <div className={style.icons_wrapper} key={elem.alt}>
                          <img
                            src={elem.src}
                            alt={elem.alt}
                            className={style.icons_item}
                          ></img>
                        </div>
                      );
                    })}
                  </div>
                )}
                {tableName === "archivedTable" && (
                  <div
                    className={
                      eTables.ArchivedTable && style.activeTable_table_row__item
                    }
                    onClick={(e) => {
                      clickIconHandler(e, elem);
                    }}
                  >
                    {archiveTableIcons.map((elem) => {
                      return (
                        <div className="icons_wrapper" key={elem.alt}>
                          <img
                            src={elem.src}
                            alt={elem.alt}
                            className={style.icons_item}
                          ></img>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        {/* ------- Table icons section end ------ */}
        {tableName === "pivotTable" &&
          (rows as Array<IPivot>).map((elem) => {
            return (
              <div
                className={eTables.PivotTable && style.pivotTable_table_row}
                key={elem.categories}
              >
                <div
                  className={
                    eTables.PivotTable && style.pivotTable_table_row__item
                  }
                >
                  {elem.categories}
                </div>
                <div
                  className={
                    eTables.PivotTable && style.pivotTable_table_row__item
                  }
                >
                  {elem.active}
                </div>
                <div
                  className={
                    eTables.PivotTable && style.pivotTable_table_row__item
                  }
                >
                  {elem.archived}
                </div>
              </div>
            );
          })}
        {/* ------ Table rows end ----------- */}
      </div>
    </div>
  );
};

export default Table;
