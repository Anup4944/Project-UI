import { getProductsAPI,getProductsByCatAPI ,getSingleProductAPI} from "../../api/productAPI";

import {
  requestPending,
  fetchAllProductSuccess,
  requestFail,
  fetchCatProducts,fetchSingleProducts
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




export const getSingleProducts = ( prodId) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getSingleProductAPI(prodId);
    
    dispatch(fetchSingleProducts(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
