import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getServerThunk } from "@/features/server";
export const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getServerThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = {};
    });
    builder.addCase(getServerThunk.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.isError = false;
      state.error = {};
    });
    builder.addCase(getServerThunk.rejected, (state, { payload }) => {
      state.data = [];
      state.isError = true;
      state.isLoading = false;
      state.error = payload;
    });
  },
});
