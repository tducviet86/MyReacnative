import { createSlice } from "@reduxjs/toolkit";
import { getTokenThunk, loginThunk } from "./auth.thunk";

const INIT_STATE = {
  list: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: INIT_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getTokenThunk.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload;
      });
  },
});
export default authSlice.reducer;
