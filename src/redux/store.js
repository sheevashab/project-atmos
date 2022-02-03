import { configureStore } from "@reduxjs/toolkit";
import homePlansReducer from "./homePlans";

export default configureStore({
  reducer: {
    homePlans: homePlansReducer,
    // lots: lotsReducer,
  },
});
