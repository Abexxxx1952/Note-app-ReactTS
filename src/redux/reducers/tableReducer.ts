import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../../types/note";
import { Categories } from "../../types/Categories";
import { ActiveTable } from "../../types/activeTable";

interface IInitialState {
  activeTask: INote[];
  archivedTask: INote[];
  activeTable: ActiveTable;
}

const initialState: IInitialState = {
  activeTask: [
    {
      id: 1,
      name: "Play associations",
      creation_time: "September 14, 2022",
      category: Categories.Idea,
      content: "Play the association game",
      dates: "06.13.24, 06.12.24",
    },
    {
      id: 2,
      name: "Walk the dog",
      creation_time: "September 14, 2022",
      category: Categories.Task,
      content: "walk the dog",
      dates: "07.04.23, 08.05.23",
    },
    {
      id: 3,
      name: "Try to nail to the sky",
      creation_time: "September 14, 2022",
      category: Categories.RandomThought,
      content: "Try to nail to the sky, interesting ...",
      dates: "01.10.22",
    },
    {
      id: 4,
      name: "The action is performed by the beneficiary",
      creation_time: "September 14, 2022",
      category: Categories.RandomThought,
      content: "Truely-true",
      dates: "02.11.22",
    },
    {
      id: 5,
      name: "Take out the trash",
      creation_time: "September 14, 2022",
      category: Categories.Task,
      content: "Very important!",
      dates: "01.11.22",
    },
    {
      id: 6,
      name: "Punish an imaginary friend",
      creation_time: "September 14, 2022",
      category: Categories.RandomThought,
      content: "He tired",
      dates: "05.12.22",
    },
    {
      id: 7,
      name: "Drill some pear",
      creation_time: "September 14, 2022",
      category: Categories.Task,
      content: "Some drill",
      dates: "12.12.22",
    },
  ],
  archivedTask: [],
  activeTable: ActiveTable.ActiveTable,
};

const tableSlice = createSlice({
  name: "tableSlice",
  initialState,
  reducers: {
    createNote: (state: IInitialState, action: PayloadAction<INote>) => {
      state.activeTask.push(action.payload);
    },
    editNote: (state: IInitialState, action: PayloadAction<INote>) => {
      const index = state.activeTask.findIndex(
        (item) => item.id === action.payload.id
      );

      state.activeTask.splice(index, 1, action.payload);
    },
    switchTable: (state: IInitialState) => {
      switch (state.activeTable) {
        case ActiveTable.ActiveTable:
          state.activeTable = ActiveTable.ArchivedTable;
          break;
        case ActiveTable.ArchivedTable:
          state.activeTable = ActiveTable.ActiveTable;
          break;

        default:
          state.activeTable = ActiveTable.ActiveTable;
      }
    },

    removeActiveNote: (
      state: IInitialState,
      action: PayloadAction<INote["id"]>
    ) => {
      state.activeTask = state.activeTask.filter(
        (item) => item.id !== action.payload
      );
    },
    removeArchivedNote: (
      state: IInitialState,
      action: PayloadAction<INote["id"]>
    ) => {
      state.archivedTask = state.archivedTask.filter(
        (item) => item.id !== action.payload
      );
    },
    archiveNote: (state: IInitialState, action: PayloadAction<INote["id"]>) => {
      const activeNote = state.activeTask.find(
        (item) => item.id === action.payload
      );

      if (activeNote) {
        state.activeTask = state.activeTask.filter(
          (item) => item.id !== action.payload
        );
        state.archivedTask.push(activeNote);
      }
    },
    unzipNote: (state: IInitialState, action: PayloadAction<INote["id"]>) => {
      const archivedNote = state.archivedTask.find(
        (item) => item.id === action.payload
      );
      state.archivedTask = state.archivedTask.filter(
        (item) => item.id !== action.payload
      );
      archivedNote && state.activeTask.push(archivedNote);
    },
  },
});

export const {
  switchTable,
  createNote,
  editNote,
  removeActiveNote,
  removeArchivedNote,
  archiveNote,
  unzipNote,
} = tableSlice.actions;

export default tableSlice.reducer;
