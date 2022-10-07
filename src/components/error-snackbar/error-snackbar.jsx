import { useSelector } from 'react-redux';
import { RecipesSnackbar } from '../recipes-snackbar/recipes-snackbar';
import { selectShowErrorSnackbar, selectErrorSnackbarText } from '../../state/app/app-selectors';
import React from 'react';

export const ErrorSnackbar = () => {
	const showSnackbar = useSelector(selectShowErrorSnackbar);
	const snackbarText = useSelector(selectErrorSnackbarText);

	return (
		<RecipesSnackbar open={showSnackbar} severity="error" text={snackbarText} />
	);
};