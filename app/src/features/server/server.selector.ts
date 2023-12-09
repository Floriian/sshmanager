import { RootState } from "@/app";
import { createSelector } from "@reduxjs/toolkit";

function rootSelector(state: RootState) {
  return state.server;
}

export const getServers = createSelector(rootSelector, (state) => state);
