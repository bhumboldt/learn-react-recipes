import { createSelector } from '@reduxjs/toolkit';

export const selectRecipesFeature = state => state.recipes;

export const selectRecipes = createSelector(selectRecipesFeature, recipes => recipes.recipes);
export const selectRecipeSelectedId = createSelector(selectRecipesFeature, recipes => recipes.selectedId);

export const selectRecipeById = createSelector(
	selectRecipes,
	selectRecipeSelectedId,
	(recipes, id) => recipes.find(recipe => recipe.id === id)
);