import { configureStore, createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: "original",
    direction: "rtl",
    language: "he",
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setTheme, setDirection, setLanguage } = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});
