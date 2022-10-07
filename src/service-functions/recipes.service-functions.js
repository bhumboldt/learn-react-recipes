
const RECIPES_LOCAL_KEY = 'recipes';

export function getRecipes() {
	const recipesString = localStorage.getItem(RECIPES_LOCAL_KEY);
	return recipesString ? JSON.parse(recipesString) : [];
}

export function setRecipes(recipes) {
	return localStorage.setItem(RECIPES_LOCAL_KEY, JSON.stringify(recipes));
}