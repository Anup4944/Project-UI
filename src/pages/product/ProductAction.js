import { getProductsAPI } from "../../api/productAPI";

import {
  requestPending,
  fetchAllProductSuccess,
  requestFail,
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
