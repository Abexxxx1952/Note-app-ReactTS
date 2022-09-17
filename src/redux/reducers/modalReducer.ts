import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  openModalFlag: boolean;
}

const initialState: IInitialState = {
  openModalFlag: false,
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
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
