import {
  requestPending,
  addProductSuccess,
  requestFail,
} from "./CheckOutSlice";

export const addToCart = (product) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = dispatch(addProductSuccess(product));
    console.log(">>>>>>" , result)
    
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };

    dispatch(requestFail(err));
  }
};

export const removeFromCart = (prodId) => async (dispatch) => {
  try {
    dispatch(requestPending());
  } catch (error) {}
};
