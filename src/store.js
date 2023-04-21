import { configureStore } from "@reduxjs/toolkit";
import Sample from "./slice";

export default configureStore({
  reducer: {
    item: Sample,
  },
});
