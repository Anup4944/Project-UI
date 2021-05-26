import { getSingleProductAPI } from "../../api/productAPI";

import  {requestPending,fetchAllSingleProdSuccess,requestFail} from "./SingleProdSlice"

export const getSingleProd = () => async (dispatch) =>{
    try {
        dispatch(requestPending());
        const result = await getSingleProductAPI();
    dispatch(fetchAllSingleProdSuccess(result));

    } catch (error) {
        const err = {
            status: "error",
            message: error.message,
          };
      
          dispatch(requestFail(err));
        
    }
}