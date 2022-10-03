import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSuccessSnackbar: false,
  showErrorSnackbar: false,
  successSnackbarText: '',
  errorSnackbarText: ''
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    actionSucceeded(state, { payload }) {
      return {
        ...state,
        showSuccessSnackbar: true,
        successSnackbarText: payload
      };
    },
    actionErrored(state, { payload }) {
      return {
        ...state,
        showErrorSnackbar: true,
        errorSnackbarText: payload
      };
    },
    snackbarCleared(state) {
      return {
        ...state,
        showErrorSnackbar: false,
        showSuccessSnackbar: false
      }
    }
  }
});

export const { actionSucceeded, actionErrored, snackbarCleared } = appSlice.actions;
export default appSlice.reducer;