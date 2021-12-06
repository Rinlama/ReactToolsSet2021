import { configureStore } from "@reduxjs/toolkit";
import loremSlice from "./reducers/lorem/loremSlice";

const store = configureStore({
  reducer: {
    lorem: loremSlice.reducer,
  },
});

export default store;
