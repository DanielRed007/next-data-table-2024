import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import themeReducer from "./themeSlice";
import infoReducer from "./infoSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    info: infoReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
