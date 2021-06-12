import {
  requestPending,
  createUserInfoSuccess,
  requestFail,
} from "./TempCart.Slice";

import { createNewUserInfoApi } from "../../api/shippingInfoAPI";

export const newUserInfo = (frmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await createNewUserInfoApi(frmDt);
   
    dispatch(createUserInfoSuccess(result));
    // console.log("from action", result);
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
