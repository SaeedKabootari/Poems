import { configureStore } from "@reduxjs/toolkit";
import { poemApi } from "../services/poemApi";
import poemReducer from "./poem-slice";

export const store = configureStore({
  reducer: { [poemApi.reducerPath]: poemApi.reducer, poem: poemReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(poemApi.middleware),
});
