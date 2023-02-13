import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const SearchSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    resultUpdater: (state, action) => action.payload,
  },
});

export const { resultUpdater } = SearchSlice.actions;
export default SearchSlice;
