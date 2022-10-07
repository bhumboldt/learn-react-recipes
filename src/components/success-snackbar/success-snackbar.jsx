import { useSelector } from 'react-redux';
import { RecipesSnackbar } from '../recipes-snackbar/recipes-snackbar';
import { selectShowSuccessSnackbar, selectSuccessSnackbarText } from '../../state/app/app-selectors';
import React from 'react';

export const SuccessSnackbar = () => {
	const showSnackbar = useSelector(selectShowSuccessSnackbar);
	const snackbarText = useSelector(selectSuccessSnackbarText);

	return (
		<RecipesSnackbar open={showSnackbar} text={snackbarText} severity='success' />
	);
};