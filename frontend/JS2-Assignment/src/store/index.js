import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/products/productSlice";
import shoppingCartSlice from "./features/shoppingCart/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    productList: productSlice, 
    shoppingCart: shoppingCartSlice
  }
})