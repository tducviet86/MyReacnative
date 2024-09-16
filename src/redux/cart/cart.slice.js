import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  list: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INIT_STATE,
  reducers: {
    addProductToCart: (state, action) => {
      const { payload } = action;
      state.list.push(payload);
    },
    deleteProductToCart: (state, action) => {
      const { payload } = action;
      state.list = state.list.filter((item) => item.id !== payload.id);
    },
  },
});
export const { addProductToCart, deleteProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
