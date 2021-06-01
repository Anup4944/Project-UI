import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  cart: [],
};

const checkOutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    addProductSuccess: (state, { payload }) => {
      state.cart.push(payload);
    },
    removeProductSuccess: (state, { payload }) => {
      const filterCart = state.cart.filter(row=>row._id !== payload )
      state.cart = filterCart
    },
    requestFail: (state) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = checkOutSlice;
export const {
  requestPending,
  addProductSuccess,
  requestFail,
  removeProductSuccess,
} = actions;
export default reducer;
