export const createRecipeObject = (description, name, steps, recipeTime, coverImage, recipe) => ({
	...recipe,
	description,
	name,
	steps,
	cover_image: coverImage,
	time: recipeTime
});