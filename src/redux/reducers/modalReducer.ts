import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInputFieldsModal } from "../../types/inputFieldsModal";
import { Categories } from "../../types/Categories";

interface IInitialState {
  openModalFlag: boolean;
  fieldsValues: IInputFieldsModal;
}

const initialState: IInitialState = {
  openModalFlag: false,
  fieldsValues: {
    inputValue: "",
    creation_time: "",
    inputCategory: Categories.Task,
    inputContent: "",
    inputDates: "",
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
    editFieldsValues: (
      state: IInitialState,
      action: PayloadAction<IInputFieldsModal>
    ) => {
      state.fieldsValues = action.payload;
    },
  },
});

export const { openModal, closeModal, editFieldsValues } = modalSlice.actions;

export default modalSlice.reducer;
