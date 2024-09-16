import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";
import cartSlice from "./cart/cart.slice";
import productReducer from "./products/product.slice";

const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartSlice,
    auth: authSlice,
  },
});
export default store;
