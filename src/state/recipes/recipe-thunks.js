import { createAsyncThunk } from "@reduxjs/toolkit";
import getNextId from "../../utils/get-next-id";

const RECIPE_STORAGE_KEY = 'recipes';

export const fetchRecipesThunk = createAsyncThunk('[Recipes] Load Recipes Initialized', () => {
  return getRecipesFromLocalStorage();
});

export const removeRecipeThunk = createAsyncThunk('[Recipes] Remove Recipe Initialized', (recipeId) => {
  let recipes = getRecipesFromLocalStorage();
  recipes = recipes.filter(recipe => recipe.id !== recipeId);
  localStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(recipes));
  return recipeId;
});

export const updateRecipeThunk = createAsyncThunk('[Recipes] Update Recipe Initialized', (recipe) => {
  let recipes =getRecipesFromLocalStorage();
  recipes = recipes.map(storedRecipe => storedRecipe.id === recipe.id ? { ...recipe } : storedRecipe);
  localStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(recipes));
  return recipe;
});

export const createRecipeThunk = createAsyncThunk('[Recipes] Create Recipe Initialized', (recipe) => {
  let recipes = getRecipesFromLocalStorage();

  const id = getNextId(recipes);
  const newRecipe = {...recipe, id};

  recipes = [newRecipe, ...recipes];
  localStorage.setItem(RECIPE_STORAGE_KEY, JSON.stringify(recipes));
  return newRecipe;
});

function getRecipesFromLocalStorage() {
  const recipeStr = localStorage.getItem(RECIPE_STORAGE_KEY);
  return recipeStr ? JSON.parse(recipeStr) : [];
}