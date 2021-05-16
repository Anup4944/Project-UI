import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./pages/product/ProductSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
