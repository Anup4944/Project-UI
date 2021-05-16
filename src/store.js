import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./pages/product/ProductSlice";
import loginReducer from "./pages/login/LoginSlice"

const store = configureStore({
  reducer: {
    product: productReducer,
    login: loginReducer,
  },
});

export default store;
 