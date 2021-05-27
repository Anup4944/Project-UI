import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./pages/product/ProductSlice";
import loginReducer from "./pages/login/LoginSlice";
import categoryReducer from "./pages/category/CategorySlice";
import createUserReducer from "./pages/create-user/CreateUserSlice";
// import singleProductReducer from "./pages/single-product-page/SingleProdSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    login: loginReducer,
    category: categoryReducer,
    createUser : createUserReducer,
    // singleProduct : singleProductReducer
  },
});

export default store;
