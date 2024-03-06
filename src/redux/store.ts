import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./taskSlice";
import { filterReducer } from "./filterSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer,
  },
});

export default store;
