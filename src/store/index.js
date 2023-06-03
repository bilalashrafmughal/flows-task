import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./drawerSlice";

const store = configureStore({
  reducer: {
    drawer: drawerSlice,
  },
});

export default store;
