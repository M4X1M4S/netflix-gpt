import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchBtn: false,
    movieSuggestionNames: null,
    movieSuggestionData: null,
  },
  reducers: {
    toggleGptSearchBtn: (state, action) => {
      state.gptSearchBtn = !state.gptSearchBtn;
    },
    addSuggestionResult: (state, action) => {
      const { suggestions, suggestedMovies } = action.payload;
      state.movieSuggestionNames = suggestions;
      state.movieSuggestionData = suggestedMovies;
    },
  },
});
export default gptSlice.reducer;
export const { toggleGptSearchBtn, addSuggestionResult } = gptSlice.actions;
