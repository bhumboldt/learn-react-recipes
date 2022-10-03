import { createSelector } from "@reduxjs/toolkit";

const selectAppFeatureState = createSelector(state => state, state => state.app);
export const selectShowSuccessSnackbar = createSelector(selectAppFeatureState, state => state.showSuccessSnackbar);
export const selectSuccessSnackbarText = createSelector(selectAppFeatureState, state => state.successSnackbarText);

export const selectShowErrorSnackbar = createSelector(selectAppFeatureState, state => state.showErrorSnackbar);
export const selectErrorSnackbarText = createSelector(selectAppFeatureState, state => state.errorSnackbarText);