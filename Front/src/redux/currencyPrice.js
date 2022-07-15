// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

import { createSlice } from "@reduxjs/toolkit";
import { USD_TYPE } from "../constants/currency";

const initialState = {
  [USD_TYPE]: 283,
};

export const currencySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    changeCurrencyValue: (state, payload) => {
      state[USD] = payload.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCurrencyValue } = currencySlice.actions;

export default currencySlice.reducer;
