import { ChevronLeft } from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { selectRecipeById } from "../../state/recipes/recipe-selectors"
import './recipe-view.css';

export const RecipeView = () => {
  const recipe = useSelector(selectRecipeById);
  const navigate = useNavigate();
  
  const handleBackClicked = () => navigate('/view-recipes');

  return (
    <div className="recipe-view-container">
      <Button className="back-button" startIcon={ <ChevronLeft />} onClick={handleBackClicked}>
        Back</Button>
      <Card className="recipe-view-card">
        <CardHeader
          title={recipe.name}>
          </CardHeader>
        <CardMedia
          component="img"
          image={recipe.cover_image}
          height="300"></CardMedia>
        <CardContent>
          <Typography variant="p">{recipe.description}</Typography>
          <ol>
            {
              recipe.steps.map(step => <li key={step.id} className="recipe-step">{step.description}</li>)
            }
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}