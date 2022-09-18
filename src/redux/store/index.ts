import { configureStore, combineReducers } from "@reduxjs/toolkit";

import modalReducer from "../reducers/modalReducer";
import tableReducer from "../reducers/tableReducer";

const rootReducer = combineReducers({
  table: tableReducer,
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
/* export type AppStore = ReturnType<typeof setupStore>; */
export type AppDispatch = typeof store.dispatch;
export default store;
