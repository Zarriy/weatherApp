import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unit: "metric",
  symbol: <>&#8451;</>,
};

const tempSlice = createSlice({
  name: "tempScale",
  initialState,
  reducers: {
    updateTempScale: (state, action) => ({
      unit: action.payload.un,
      symbol: action.payload.sym,
    }),
  },
});

export const { updateTempScale } = tempSlice.actions;

export default tempSlice;
