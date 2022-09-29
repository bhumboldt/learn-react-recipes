import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { createRecipeThunk } from "../state/recipes/recipe-thunks";

export const AddRecipe = () => {

  const dispatch = useDispatch();

  const dispatchCreateRecipe = () => dispatch(createRecipeThunk({ description: 'HEYYY' }));

  return (
    <Button onClick={dispatchCreateRecipe}>Click me!!!!</Button>
  )
}