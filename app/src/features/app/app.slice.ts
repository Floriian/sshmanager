import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveItem: (state, { payload }: PayloadAction<string>) => {
      state.navbar.selectedNavbarItem = payload;
    },
  },
});

export const { setActiveItem } = appSlice.actions;
