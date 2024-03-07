import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import status from "./constants";
import { Filter } from "utils/types";

const filterInitialState: Filter = {
  filter: status.all,
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { setStatus } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
