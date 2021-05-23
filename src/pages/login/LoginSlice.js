import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginResponse: {},
  isAuth : false
 
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },

    loginSuccess: (state ,{payload}) => {
      state.isLoading = false;
      state.loginResponse = payload || {};
      state.isAuth= true;
      
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.loginResponse = payload || {};
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail } = actions;
export default reducer;
