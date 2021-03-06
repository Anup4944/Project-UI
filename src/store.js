import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./pages/product/ProductSlice";
import loginReducer from "./pages/login/LoginSlice";
import categoryReducer from "./pages/category/CategorySlice";
import createUserReducer from "./pages/create-user/CreateUserSlice";
import checkOutReducer from "./pages/check-out-page/CheckOutSlice";
import shippingReducer from "./pages/tem-cart/TempCart.Slice"
// import singleProductReducer from "./pages/single-product-page/SingleProdSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    login: loginReducer,
    category: categoryReducer,
    createUser : createUserReducer,
    checkOut: checkOutReducer,
    UserShippingInfo: shippingReducer
    // singleProduct : singleProductReducer
  },
});

export default store;
