import { AccessTimeOutlined, MoreVert } from '@mui/icons-material';
import { Card, CardContent, CardHeader, CardMedia, Typography, IconButton, Menu, MenuItem, CardActions, Button } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectRecipeId } from '../../state/recipes/recipe-slice';
import { removeRecipeThunk } from '../../state/recipes/recipe-thunks';
import { DeleteConfirmationDialog } from '../delete-confirmation-dialog/delete-confirmation-dialog';
import './recipe-list-view.css';

export const RecipeListView = ({ name, description, cover_image, time, id }) => {
	const dispatch = useDispatch();
	const navigation = useNavigate();

	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);

	const handleIconButtonClick = (event) => {
		event.stopPropagation();
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
	};

	const handleDeleteClicked = (event) => {
		event.stopPropagation();
		setAnchorEl(null);
		setDeleteDialogOpen(true);
	};

	const handleViewClick = () => {
		dispatch(selectRecipeId(id));
		navigation(`/recipes/${id}/view`);
	};

	const handleEditClick = () => {
		dispatch(selectRecipeId(id));
		navigation(`/recipes/${id}/edit`);
	};

	return (
		<Card className="recipe">
			<CardHeader
				title={name}
				action={
					<>
						<IconButton aria-label="settings" onClick={handleIconButtonClick}>
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
							<MenuItem onClick={handleEditClick}>Edit</MenuItem>
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
				image={cover_image || 'https://via.placeholder.com/1000x1000'}
			/>
			<CardContent>
				<Stack className="card-info" direction="row" alignItems="center" gap="8px">
					<AccessTimeOutlined></AccessTimeOutlined>
					<Typography variant="p">{time} min.</Typography>
				</Stack>
        
				<Typography variant="p">{description}</Typography>
			</CardContent>
			<CardActions>
				<Button className='view-button' variant="contained" onClick={handleViewClick}>View</Button>
			</CardActions>
		</Card>
	);
};