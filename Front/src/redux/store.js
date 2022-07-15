import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./moneySlice";
import currencyReducer from "./currencyPrice";

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    currencyPrice: currencyReducer,
  },
});
