import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./pages/product/ProductSlice";
import loginReducer from "./pages/login/LoginSlice";
import categoryReducer from "./pages/category/CategorySlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    login: loginReducer,
    category: categoryReducer,
  },
});

export default store;
