import { configureStore } from "@reduxjs/toolkit";
import { reducer as rootReducer } from "@/app/store";
export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
