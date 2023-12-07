import { serverService } from "@/features/server";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IServer } from "@sshmanager/shared";

export const getServerThunk = createAsyncThunk<IServer[], void>(
  "server/list",
  async (_, api) => {
    try {
      const data = await serverService.list();
      return data;
    } catch (e) {
      const { rejectWithValue } = api;
      return rejectWithValue({
        error: e,
        isError: true,
      });
    }
  }
);
