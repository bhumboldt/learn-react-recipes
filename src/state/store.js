import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipes/recipe-slice";
import appReducer from './app/app-slice';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  app: appReducer
});

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};