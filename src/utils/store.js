import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    // Add reducers here
    user: userReducer,
    movie: movieReducer,
    config: configReducer,
  },
  // Add middleware here
  // Enables Redux DevTools
});

export default appStore;
