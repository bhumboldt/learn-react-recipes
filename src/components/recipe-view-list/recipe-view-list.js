import { Recipe } from '../recipe/recipe';
import './recipe-view-list.css';

export const RecipeViewList = () => {
  return (
    <div className="recipe-view-list">
      <Recipe num='1'></Recipe>
      <Recipe num='2'></Recipe>
      <Recipe num='3'></Recipe>
    </div>
  )
}