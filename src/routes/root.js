import { Header } from "../components/header/header"
import { Outlet } from "react-router-dom"
import store from '../state/store';
import { fetchRecipesThunk } from '../state/recipes/recipe-thunks';

store.dispatch(fetchRecipesThunk());

export const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  )
}