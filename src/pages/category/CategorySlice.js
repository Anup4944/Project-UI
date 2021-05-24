import { createSlice } from "@reduxjs/toolkit";

const initialState = {
isLoading : false,
categoryList: []
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers:{
        requestPending: (state) => {
            state.isLoading = true;
          },
          fetchAllCategorySuccess: (state, { payload }) => {
            state.categoryList = payload.result || [];
            state.isLoading = false;
          },
          requestFail: (state, { payload }) => {
            state.isLoading = false;
            state.status = payload.status;
            state.message = payload.message;
          },
    }

})

const { reducer, actions } = categorySlice;

export const { requestPending, fetchAllCategorySuccess, requestFail } = actions;

export default reducer;
