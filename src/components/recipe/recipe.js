import { AccessTimeOutlined, Grade, MoreVert } from "@mui/icons-material";
import { Card, CardContent, CardHeader, CardMedia, Typography, IconButton, Menu, MenuItem } from "@mui/material"
import { Stack } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeRecipeThunk } from "../../state/recipes/recipe-thunks";
import { DeleteConfirmationDialog } from "../delete-confirmation-dialog/delete-confirmation-dialog";
import './recipe.css';

export const Recipe = ({ name, description, cover_image, time, id }) => {
  const dispatch = useDispatch();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteConfirmation = (shouldDelete) => {
    if (shouldDelete) {
      dispatch(removeRecipeThunk(id));
    }

    setDeleteDialogOpen(false);
  }

  const handleDeleteClicked = () => {
    setAnchorEl(null);
    setDeleteDialogOpen(true);
  }

  return (
    <Card className="recipe">
      <CardHeader
        title={name}
        action={
          <>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVert />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
            >
              <MenuItem>Edit</MenuItem>
              <MenuItem color="error" onClick={handleDeleteClicked}>
                <Typography variant="p" color="error">Delete</Typography>
              </MenuItem>
            </Menu>
            <DeleteConfirmationDialog
                  onClose={handleDeleteConfirmation}
                  open={deleteDialogOpen}
                  title="Delete Recipe?"
                  description="Are you sure you want to delete this recipe?"
                ></DeleteConfirmationDialog>
          </>
        }
      >
      </CardHeader>
      <CardMedia
        component="img"
        height="300"
        image={cover_image || "https://via.placeholder.com/1000x1000"}
      />
      <CardContent>
        <Stack className="card-info" direction="row" alignItems="center" gap="8px">
          <AccessTimeOutlined></AccessTimeOutlined>
          <Typography variant="p">{time} min.</Typography>

          <Grade></Grade>
          <Typography variant="p">4.2 / 5</Typography>
        </Stack>
        
        <Typography variant="p">{description}</Typography>
      </CardContent>
    </Card>
  )
}