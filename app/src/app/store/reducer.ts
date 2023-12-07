import { serverSlice } from "@/features/server";
import { combineReducers } from "@reduxjs/toolkit";

export const reducer = combineReducers({
  [serverSlice.name]: serverSlice.reducer,
});
