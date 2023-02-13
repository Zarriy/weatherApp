import { configureStore } from "@reduxjs/toolkit";
import tempSlice from "./tempSlice";
import SearchSlice from "./searchSlice";
import mapSlice from "./mapSlice";

const store = configureStore({
  reducer: {
    tempReducer: tempSlice.reducer,
    searchReducer: SearchSlice.reducer,
    mapReducer: mapSlice.reducer,
  },
});

export default store;
