import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { createPortal } from "react-dom";

export const DeleteConfirmationDialog = ({ onClose, open, title, description }) => {
  const handleClose = () => onClose(false);
  const handleYes = () => onClose(true);
  const handleNo = () => onClose(false);

  return createPortal(
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNo}>No</Button>
        <Button onClick={handleYes}>Yes</Button>
      </DialogActions>
    </Dialog>,
    document.getElementById('recipes-modal')
  )
}