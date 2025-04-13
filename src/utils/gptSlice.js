import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchBtn: false,
  },
  reducers: {
    toggleGptSearchBtn: (state, action) => {
      state.gptSearchBtn = !state.gptSearchBtn;
    },
  },
});
export default gptSlice.reducer;
export const { toggleGptSearchBtn } = gptSlice.actions;
