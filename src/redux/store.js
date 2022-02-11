import { configureStore } from "@reduxjs/toolkit";
import homePlansReducer from "./homePlans";
import lotsReducer from "./lots";
import combinationsReducer from "./combinations";

const store = configureStore({
  reducer: {
    homePlans: homePlansReducer,
    lots: lotsReducer,
    combinations: combinationsReducer,
  },
});

export default store;
