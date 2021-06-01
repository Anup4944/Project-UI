import {
  requestPending,
  addProductSuccess,
  requestFail,removeProductSuccess
} from "./CheckOutSlice";

export const addToCart = (product) => async (dispatch) => {
  try {
    dispatch(requestPending());
    dispatch(addProductSuccess(product));
    console.log(product)
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};

export const removeFromCart = (product) => async (dispatch) => {
  try {
    dispatch(requestPending());
    dispatch(removeProductSuccess(product));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
  }
};
