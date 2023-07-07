import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "./types";

const initialState: AppState = {
  address: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const { addAddress } = appSlice.actions;
export default appSlice.reducer;
