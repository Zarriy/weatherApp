import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: null,
  focastResult: null,
};

const SearchSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    resultUpdater: (state, action) => ({
      ...state,
      searchResult: action.payload,
    }),
    forcastUpdater: (state, action) => ({
      ...state,
      forcastResult: action.payload,
    }),
  },
});

export const { resultUpdater, forcastUpdater } = SearchSlice.actions;
export default SearchSlice;
