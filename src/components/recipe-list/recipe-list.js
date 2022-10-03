import { useSelector } from 'react-redux';
import { selectRecipes } from '../../state/recipes/recipe-selectors';
import { RecipeListView } from '../recipe-list-view/recipe-list-view';
import './recipe-list.css';

export const RecipeList = () => {
  const recipes = useSelector(selectRecipes);

  return (
    <div className="recipe-list">
      {
        recipes.map(recipe => <RecipeListView key={recipe.id} {...recipe}></RecipeListView>)
      }
    </div>
  )
}