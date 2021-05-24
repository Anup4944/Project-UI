import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  userList: [],
};

const createUserSlice = createSlice({
  name: "createUser",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    createUserSuccess: (state, { payload }) => {
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
const { reducer, actions } = createUserSlice;
export const { requestPending, createUserSuccess, requestFail } = actions;

export default reducer;