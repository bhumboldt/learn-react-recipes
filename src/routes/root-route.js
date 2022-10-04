import { Header } from "../components/header/header"
import { Outlet } from "react-router-dom"
import { fetchRecipesThunk } from '../state/recipes/recipe-thunks';
import { SuccessSnackbar } from "../components/success-snackbar/success-snackbar";
import { ErrorSnackbar } from "../components/error-snackbar/error-snackbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const RootRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchRecipesThunk()) }, [dispatch]);
  
  return (
    <>
      <SuccessSnackbar />
      <ErrorSnackbar />
      <Header></Header>
      <Outlet />
    </>
  )
}