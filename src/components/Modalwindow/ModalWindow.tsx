import { useState, FC } from "react";
import { Categories } from "../../types/Categories";
import { IInputFieldsModal } from "../../types/inputFieldsModal";

import { useAppDispatch } from "../../hooks/redux";

import {
  closeModal,
  createNote,
  editNote,
  editModOff,
  editFieldsValues,
} from "../../redux/actions";

import {
  getEditFlag,
  getFieldsValues,
} from "../../redux/selectors/modalSelectors";

import { INote } from "../../types/note";
import { regexp } from "../../utils/constant";

import { customAlphabet } from "nanoid";
import style from "./ModalWindow.module.css";

const ModalWindow: FC = () => {
  const dispatch = useAppDispatch();
  const editMod = getEditFlag();
  const note = getFieldsValues();
  const actionLabel = editMod ? "Edit Note" : "Add Note";

  const [noteModal, setNote] = useState<INote>(note);

  const ValidationFields = ({
    inputValue,
    inputContent,
    inputDates,
  }: IInputFieldsModal) => {
    return inputValue === "" || inputContent === "" || inputDates === ""
      ? false
      : true;
  };

  const TransformDates = (dates: string) => {
    return Array.from(dates.matchAll(regexp)).join(", ");
  };

  const modalButtonHandler = () => {
    const nanoid = customAlphabet("1234567890", 10);
    const noteId = parseInt(nanoid());
    if (
      ValidationFields({
        inputValue: noteModal.name,
        inputContent: noteModal.content,
        inputDates: noteModal.dates,
      })
    ) {
      const dates = TransformDates(noteModal.dates);

      !editMod &&
        dispatch(
          createNote({
            id: noteId,
            name: noteModal.name,
            creation_time: new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }),
            category: noteModal.category,
            content: noteModal.content,
            dates: dates,
          })
        );

      editMod &&
        dispatch(
          editNote({
            id: noteModal.id,
            name: noteModal.name,
            creation_time: noteModal.creation_time,
            category: noteModal.category,
            content: noteModal.content,
            dates: dates,
          })
        );
      editMod && dispatch(editModOff());
      dispatch(
        editFieldsValues({
          id: 0,
          name: "",
          creation_time: "",
          category: Categories.Task,
          content: "",
          dates: "",
        })
      );
      dispatch(closeModal());
    }
  };

  return (
    <div className={style.modal_content}>
      <div className="name_input">
        <input
          type="text"
          placeholder="Add a name"
          required
          value={noteModal.name}
          onChange={(e) => {
            setNote({ ...noteModal, name: e.target.value });
          }}
        />
        <div>
          <p>Required</p>
        </div>
      </div>
      <div className={style.category_input}>
        <label htmlFor="category_select">Select a category:</label>
        <select
          name="category_select"
          id="category_select"
          onChange={(e) => {
            setNote({ ...noteModal, category: e.target.value as Categories });
          }}
        >
          {Object.values(Categories).map((elem) => {
            return (
              <option value={elem} key={elem}>
                {elem}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.content_input}>
        <input
          type="text"
          placeholder="Add a note content"
          required
          value={noteModal.content}
          onChange={(e) => {
            setNote({ ...noteModal, content: e.target.value });
          }}
        />
        <div>
          <p>Required</p>
        </div>
      </div>
      <div className="dates_input">
        <input
          type="text"
          placeholder="Add a dates"
          required
          value={noteModal.dates}
          onChange={(e) => {
            setNote({ ...noteModal, dates: e.target.value });
          }}
        />
        <div>
          <p>Required</p>
        </div>
      </div>

      <div className="submit">
        <button className={style.add_btn} onClick={modalButtonHandler}>
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
