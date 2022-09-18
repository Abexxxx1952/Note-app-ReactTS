import { INote } from "../../types/note";
import { Tables } from "../../types/tables";

import {
  activeTableHeaders,
  archivedTableHeaders,
  activeTableIcons,
  archiveTableIcons,
} from "../../utils/constant";

import style from "./Table.module.css";

const Table = (tableName: Tables, rows: INote[]): JSX.Element => {
  return (
    <div className={`${style}.${tableName}_table`}>
      <div className={`${style}.${tableName}_table_header`}>
        {tableName === "activeTable" &&
          activeTableHeaders.map((elem) => {
            return (
              <div className={`${style}.${tableName}_table_header__item`}>
                ${elem}
              </div>
            );
          })}

        {tableName === "archivedTable" &&
          archivedTableHeaders.map((elem) => {
            return (
              <div className={`${style}.${tableName}_table_header__item`}>
                ${elem}
              </div>
            );
          })}
      </div>
      <div className={`${style}.${tableName}_table_row__wrapper`}>
        {rows.map((elem) => {
          return (
            <div className={`${style}.${tableName}_table_row`}>
              <div className={`${style}.${tableName}_table_row__item`}>
                ${elem.name}
              </div>
              <div className={`${style}.${tableName}_table_row__item`}>
                ${elem.creation_time}
              </div>
              <div className={`${style}.${tableName}_table_row__item`}>
                ${elem.category}
              </div>
              <div className={`${style}.${tableName}_table_row__item`}>
                ${elem.content}
              </div>
              <div className={`${style}.${tableName}_table_row__item`}>
                ${elem.dates}
              </div>

              {tableName === "activeTable" && (
                <div className={`${style}.${tableName}_table_row__item`}>
                  {activeTableIcons.map((elem) => {
                    return (
                      <div className="icons_wrapper">
                        <img
                          src={elem.src}
                          alt={elem.alt}
                          className={elem.style}
                        ></img>
                      </div>
                    );
                  })}
                </div>
              )}

              {tableName === "archivedTable" && (
                <div className={`${style}.${tableName}_table_row__item`}>
                  {archiveTableIcons.map((elem) => {
                    return (
                      <div className="icons_wrapper">
                        <img
                          src={elem.src}
                          alt={elem.alt}
                          className={elem.style}
                        ></img>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
