import {
  requestPending,
  addProductSuccess,
  requestFail,
  removeProductSuccess,addingProductSuccess,subtractProductSuccess
} from "./CheckOutSlice";

export const addToCart = (product) => async (dispatch) => {
  try {
    dispatch(requestPending());
    product._id && dispatch(addProductSuccess(product));
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


export const addingItemsInsideCart = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());
    dispatch(addingProductSuccess(_id));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
  }
};
export const subsItemsInsideCart = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());
    dispatch(subtractProductSuccess(_id));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
  }
};
