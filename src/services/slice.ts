import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "./types";

const initialState: AppState = {
  address: "",
  themeMode: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    themeMode: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { addAddress, themeMode } = appSlice.actions;
export default appSlice.reducer;
