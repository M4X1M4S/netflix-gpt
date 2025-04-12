import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    gptSearchBtn: false,
  },
  reducers: {
    toggleGptSearchBtn: (state, action) => {
      state.gptSearchBtn = !state.gptSearchBtn;
    },
  },
});
export default configSlice.reducer;
export const { toggleGptSearchBtn } = configSlice.actions;
