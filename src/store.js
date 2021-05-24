import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./pages/product/ProductSlice";
import loginReducer from "./pages/login/LoginSlice";
import categoryReducer from "./pages/category/CategorySlice";
import createUserReducer from "./pages/create-user/CreateUserSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    login: loginReducer,
    category: categoryReducer,
    createUser : createUserReducer,
  },
});

export default store;
