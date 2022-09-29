import { createSlice } from "@reduxjs/toolkit";
import { createRecipeThunk, fetchRecipesThunk, removeRecipeThunk, updateRecipeThunk } from "./recipe-thunks";

const initialState = {
  recipes: []
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipesThunk.fulfilled, (state, { payload }) => ({
        ...state,
        recipes: [...payload]
      }))
      .addCase(createRecipeThunk.fulfilled, (state, { payload }) => ({
        ...state,
        recipes: [payload, ...state.recipes]
      }))
      .addCase(updateRecipeThunk.fulfilled, (state, { payload }) => ({
        ...state,
        recipes: state.recipes.map(recipe => recipe.id === payload.id ? payload : recipe)
      }))
      .addCase(removeRecipeThunk.fulfilled, (state, { payload }) => ({
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== payload)
      }))
  }
});

export const { createRecipe, updateRecipe, deleteRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;