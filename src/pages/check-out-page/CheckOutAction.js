import {
  requestPending,
  addProductSuccess,
  requestFail,
  removeProductSuccess,
 
} from "./CheckOutSlice";

export const addToCart = (product) => async (dispatch) => {
  try {
    dispatch(requestPending());
    dispatch(addProductSuccess(product));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const removeFromCart = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());
    dispatch(removeProductSuccess(_id));
    
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
  }
};
