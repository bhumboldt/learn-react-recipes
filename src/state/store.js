import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipes/recipe-slice";

export default configureStore({
  reducer: {
    recipes: recipeReducer
  }
});