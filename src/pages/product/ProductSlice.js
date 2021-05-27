import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productList: [],
  currentViewList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    fetchAllProductSuccess: (state, { payload }) => {
      state.productList = payload.result || [];
      state.isLoading = false;
    },

    fetchCatProducts: (state, { payload }) => {
      state.status = payload.status;
      state.currentViewList = payload.result;
      state.isLoading = false;
    },

    fetchSingleProducts: (state, { payload }) => {
      state.status = payload.status;
      state.currentViewList = payload.result;
      state.isLoading = false;
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = productSlice;

export const {
  requestPending,
  fetchAllProductSuccess,
  requestFail,
  fetchCatProducts,
  fetchSingleProducts,
} = actions;

export default reducer;
