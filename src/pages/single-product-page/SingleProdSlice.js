import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    productList: [],
  };

  const SingleProdSlice = createSlice({
      name: "singleProduct",
      initialState,
      reducers:{
        requestPending: (state) => {
            state.isLoading = true;
          },
          fetchAllSingleProdSuccess: (state, { payload }) => {
            state.productList = payload.result || [];
            state.isLoading = false;
          },
          requestFail: (state, { payload }) => {
            state.isLoading = false;
            state.status = payload.status;
            state.message = payload.message;
          },
      }

  })

  const { reducer, actions } = SingleProdSlice;

  export const {requestPending,fetchAllSingleProdSuccess,requestFail} = actions;
  
  export default reducer;