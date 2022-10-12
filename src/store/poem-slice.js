import { createSlice } from "@reduxjs/toolkit";

const initialPoemState = {
  favoritePoems: [],
};
const poemSlice = createSlice({
  name: "poem",
  initialState: initialPoemState,
  reducers: {
    addToFavorite(state, action) {
      const existingPoemId = state.favoritePoems.findIndex(
        (item) => item.title === action.payload.title
      );
      if (existingPoemId === -1) {
        state.favoritePoems.push(action.payload);
      }
    },
    deleteFromFavorite(state, action) {
      const updatedFavoritePoems = state.favoritePoems.filter(
        (item) => item.title !== action.payload
      );
      state.favoritePoems = [...updatedFavoritePoems];
    },
  },
});

export const poemActions = poemSlice.actions;

export default poemSlice.reducer;
