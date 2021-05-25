import { getProductsAPI,getProductsByCatAPI } from "../../api/productAPI";

import {
  requestPending,
  fetchAllProductSuccess,
  requestFail,
  fetchCatProducts
} from "./ProductSlice";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getProductsAPI();
    dispatch(fetchAllProductSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
export const getProductsByCat = ( catId) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getProductsByCatAPI(catId);
    
    dispatch(fetchCatProducts(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
