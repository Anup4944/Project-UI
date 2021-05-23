import { loginPending, loginSuccess, loginFail } from "./LoginSlice";
import { getLoginAPI } from "../../api/loginAPI";

export const getLogin = (frmDt) => async (dispatch) => {
  try {
    dispatch(loginPending());
    const result = await getLoginAPI(frmDt); // this will return status,msg an tokens
    console.log(result);
    // if we get tokens from server, we need to store in browser storage.
    const { accessJWT, refreshJWT } = result;
    accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
    refreshJWT && localStorage.setItem("ourEcmRJWT", refreshJWT);

    dispatch(loginSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
  }
};
