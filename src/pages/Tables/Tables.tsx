import Table from "../../components/Table/Table";

import Button from "../../components/Button/Button";

import { getActiveTable } from "../../redux/selectors/tableSelectors";

import style from "./Tables.module.css";

const Tables = () => {
  let activeTable = getActiveTable();

  return (
    <>
      {activeTable === "activeTask" && (
        <Table tableName="activeTable" rows={} />
      )}
      {activeTable === "archivedTask" && <Table />}
      <div className={style.create_button_wrapper}>
        <Button />
      </div>
      <Table />
      <div className={style.switch_button_wrapper}>
        <Button />
      </div>
    </>
  );
};

export default Tables;
