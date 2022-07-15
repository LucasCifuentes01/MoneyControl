// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

import { createSlice } from "@reduxjs/toolkit";
import { ARS_TYPE, USD_TYPE } from "../constants/currency";

const initialState = {
  [ARS_TYPE]: 0,
  [USD_TYPE]: 463.66,
};

export const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    increment: (state, payload) => {
      const currency = payload.payload.currecy;
      state[currency] += payload.payload.value;
    },
    decrement: (state, payload) => {
      const currency = payload.payload.currecy;
      state[currency] -= payload.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = moneySlice.actions;

export default moneySlice.reducer;
