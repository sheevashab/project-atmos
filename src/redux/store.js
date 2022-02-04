import { configureStore } from "@reduxjs/toolkit";
import homePlansReducer from "./homePlans";
import lotsReducer from "./lots";

export default configureStore({
  reducer: {
    homePlans: homePlansReducer,
    lots: lotsReducer,
  },
});
