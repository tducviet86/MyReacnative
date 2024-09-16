import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";

export const fetchProductsThunk = createAsyncThunk(
  "product/fetchProductsThunk",
  async (params = {}) => {
    const response = await authInstance.get("/products", {
      params: {
        name: params.name,
      },
    });
    const {
      data: { products },
    } = response.data;
    // console.log(products);
    return products;
  }
);

export const addProductThunk = createAsyncThunk(
  "products/addProductThunk",
  async (data) => {
    const { name, price, image } = data;
    const response = await authInstance.post("/products", {
      name,
      price,
      image,
    });

    const {
      data: { product },
    } = response.data;
    // console.log(product);

    return product;
  }
);

export const getProductThunk = createAsyncThunk(
  "products/getProductThunk",
  async (id) => {
    const response = await authInstance.get(`/products/${id}`);
    const {
      data: { product },
    } = response.data;
    // console.log(product);
    return product;
  }
);

export const updateProductThunk = createAsyncThunk(
  "products/updateProductThunk",
  async (data) => {
    const { name, price, image, id } = data;
    const response = await authInstance.patch(`/products/${id}`, {
      name,
      price,
      image,
    });
    const {
      data: { product },
    } = response.data;
    return product;
  }
);
