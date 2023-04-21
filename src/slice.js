import { createSlice } from "@reduxjs/toolkit";

export const Sample = createSlice({
  name: "sample",
  initialState: {
    isComplete: false,
    arr: [],
  },
  reducers: {
    checkBox: (state, action) => {
      state.isComplete = action.payload;
    },
  },
});
export const { checkBox } = Sample.actions;
export default Sample.reducer;
