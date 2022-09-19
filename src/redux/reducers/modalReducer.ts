import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInputFieldsModal } from "../../types/inputFieldsModal";
import { Categories } from "../../types/Categories";
import { INote } from "../../types/note";

interface IInitialState {
  openModalFlag: boolean;
  editModalFlag: boolean;
  fieldsValues: INote;
}

const initialState: IInitialState = {
  openModalFlag: false,
  editModalFlag: false,
  fieldsValues: {
    id: 0,
    name: "",
    creation_time: "",
    category: Categories.Task,
    content: "",
    dates: "",
  },
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    openModal: (state: IInitialState) => {
      state.openModalFlag = true;
    },
    closeModal: (state: IInitialState) => {
      state.openModalFlag = false;
    },
    editModOn: (state: IInitialState) => {
      state.editModalFlag = true;
    },
    editModOff: (state: IInitialState) => {
      state.editModalFlag = false;
    },
    editFieldsValues: (state: IInitialState, action: PayloadAction<INote>) => {
      state.fieldsValues = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  editModOn,
  editModOff,
  editFieldsValues,
} = modalSlice.actions;

export default modalSlice.reducer;
