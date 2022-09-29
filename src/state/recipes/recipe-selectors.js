import { createSelector } from "@reduxjs/toolkit";

export const selectRecipesFeature = createSelector(state => state.recipes, recipes => recipes.recipes);