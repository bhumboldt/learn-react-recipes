import { useSelector } from 'react-redux';
import { selectRecipesFeature } from '../../state/recipes/recipe-selectors';
import { Recipe } from '../recipe/recipe';
import './recipe-view-list.css';

export const RecipeViewList = () => {
  const recipes = useSelector(selectRecipesFeature);

  return (
    <div className="recipe-view-list">
      {
        recipes.map(recipe => <Recipe key={recipe.id} num={recipe.id}></Recipe>)
      }
    </div>
  )
}