import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
  };
const checkOutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    addProductSuccess: (state ,{payload}) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    requestFail: (state) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = checkOutSlice;
export const { requestPending, addProductSuccess, requestFail } = actions;
export default reducer;
