import { getCategoryAPI } from "../../api/categoryAPI";

import { requestPending, fetchAllCategorySuccess, requestFail } from "./CategorySlice"

export const getCategories = () => async (dispatch) => {
    try {
      dispatch(requestPending());
  
      const result = await getCategoryAPI();
      dispatch(fetchAllCategorySuccess(result));
    } catch (error) {
      const err = {
        status: "error",
        message: error.message,
      };
  
      dispatch(requestFail(err));
    }
  };