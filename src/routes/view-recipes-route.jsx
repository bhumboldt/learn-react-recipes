import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RecipeList } from '../components/recipe-list/recipe-list';
import { recipeIdCleared } from '../state/recipes/recipe-slice';
import React from 'react';

export const ViewRecipesRoute = () => {
	const dispatch = useDispatch();

	useEffect(() => { dispatch(recipeIdCleared()); }, [dispatch]);

	return (
		<RecipeList></RecipeList>
	);
};