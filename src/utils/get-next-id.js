export default function getNextId(recipes) {
  const maxId = recipes.reduce((maxId, recipe) => Math.max(recipe.id, maxId), -1)
  return maxId + 1
}