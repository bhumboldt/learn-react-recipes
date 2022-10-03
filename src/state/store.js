import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipes/recipe-slice";
import appReducer from './app/app-slice';

export default configureStore({
  reducer: {
    recipes: recipeReducer,
    app: appReducer
  }
});