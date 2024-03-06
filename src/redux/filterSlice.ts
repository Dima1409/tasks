import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import status from "./constants";
import { FiltersState } from "utils/types";

const filterInitialState: FiltersState = {
  status: status.all,
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;