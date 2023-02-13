import { configureStore } from "@reduxjs/toolkit";
import tempSlice from "./tempSlice";
import SearchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    tempReducer: tempSlice.reducer,
    searchReducer: SearchSlice.reducer,
  },
});

export default store;
