import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    // Add reducers here
    user: userReducer,
  },
  // Add middleware here
});

export default appStore;
