import { Header } from "../components/header/header"
import { Outlet } from "react-router-dom"
import store from '../state/store';
import { fetchRecipesThunk } from '../state/recipes/recipe-thunks';
import { SuccessSnackbar } from "../components/success-snackbar/success-snackbar";
import { ErrorSnackbar } from "../components/error-snackbar/error-snackbar";

store.dispatch(fetchRecipesThunk());

export const Root = () => {
  return (
    <>
      <SuccessSnackbar />
      <ErrorSnackbar />
      <Header></Header>
      <Outlet />
    </>
  )
}