import { Alert, Snackbar } from "@mui/material"
import { useDispatch } from "react-redux"
import { snackbarCleared } from "../../state/app/app-slice";

export const RecipesSnackbar = ({ open, autoHideDuration = 2000, text, severity = 'success' }) => {
  const dispatch = useDispatch();

  const handleOnClose = (event, reason) => {
    if (reason === 'clickaway') return;
    dispatch(snackbarCleared());
  }

  return (
    <Snackbar open={open} onClose={handleOnClose} autoHideDuration={autoHideDuration}>
      <Alert severity={severity}>{ text }</Alert>
    </Snackbar>
  )
}