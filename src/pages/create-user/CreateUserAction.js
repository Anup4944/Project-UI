import {
  requestPending,
  createUserSuccess,
  requestFail,
} from "./CreateUserSlice";

import { createNewUserApi } from "../../api/createUserAPI";

export const newUser = (frmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await createNewUserApi(frmDt);
    console.log(result)
    dispatch(createUserSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};
