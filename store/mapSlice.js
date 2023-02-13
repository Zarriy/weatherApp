import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const mapSlice = createSlice({
  name: "mapSize",
  initialState,
  reducers: {
    updateMapSize: (state, action) => action.payload,
  },
});

export const { updateMapSize } = mapSlice.actions;
export default mapSlice;
