import {loginPending, loginSuccess, loginFail} from "./LoginSlice";
import {getLoginAPI} from "../../api/loginAPI";


export const getLogin  = async (dispatch) => {
    try {
        dispatch(loginPending());
        const result = await getLoginAPI();
        disp

    } catch (error) {
        const err = {
            status : "error", 
            message : error.message
        }
        
    }


}