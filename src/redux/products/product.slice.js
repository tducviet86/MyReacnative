import { createSlice } from "@reduxjs/toolkit";
import {
  addProductThunk,
  fetchProductsThunk,
  getProductThunk,
  updateProductThunk,
} from "./product.thunk";
import SAMPLE_DATA from "../../../data.sample";

const INIT_STATE = {
  list: [],
  detail: null,
};
const productSlice = createSlice({
  name: "products",
  initialState: INIT_STATE,
  reducers: {
    addProduct: (state, action) => {
      const { payload } = action;
      payload.id = state.list.length + 1;
      state.list.push(payload);
      //state.list = [...state.list, payload];
    },
    updateProduct: (state, action) => {
      const { payload } = action;
      const target = state.list.find((item) => item.id === payload.id);
      if (target) {
        Object.assign(target, payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        const { payload } = action;
        state.list = payload;
      })
      .addCase(addProductThunk.fulfilled, (state, action) => {
        const { payload } = action;
        state.list.push(payload);
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        const { payload } = action;
        state.detail = payload;
      })
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        const { payload } = action;
        const target = state.list.find((item) => item.id === payload.id);
        console.log(target);
        if (target) {
          Object.assign(target, payload);
        }
      });
  },
});
export const { addProduct, updateProduct } = productSlice.actions;

export default productSlice.reducer;
