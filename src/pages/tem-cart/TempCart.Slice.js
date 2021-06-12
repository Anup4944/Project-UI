import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    userInfoList: [],
  };

  const createUserInfoSlice = createSlice({
    name: "UserShippingInfo",
    initialState,
    reducers: {
      requestPending: (state) => {
        state.isLoading = true;
      },
      createUserInfoSuccess: (state, { payload }) => {
          state.isLoading = false;
          state.status = payload.status;
          state.message = payload.message;
      },
      requestFail: (state, { payload }) => {
        state.isLoading = false;
        state.status = payload.status;
        state.message = payload.message;
      },
    },
  });
  const { reducer, actions } = createUserInfoSlice;
  export const { requestPending, createUserInfoSuccess, requestFail } = actions;
  
  export default reducer;