import { Card, CardHeader, Button, CardContent, TextField, Typography, CardMedia } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectRecipeById } from "../../state/recipes/recipe-selectors";
import { createRecipeThunk, updateRecipeThunk } from "../../state/recipes/recipe-thunks";
import { actionErrored } from '../../state/app/app-slice';
import './add-recipe-form.css';

export const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipe = useSelector(selectRecipeById);

  const [steps, setSteps] = useState(recipe ? recipe.steps : []);
  const [name, setName] = useState(recipe ? recipe.name : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');
  const [coverImage, setCoverImage] = useState(recipe ? recipe.cover_image : '');
  const [recipeTime, setRecipeTime] = useState(recipe ? recipe.time : 0);

  const nameChange = (event) => setName(event.target.value);
  const descriptionChange = (event) => setDescription(event.target.value);

  const stepAdded = () => setSteps([...steps, { id: new Date().getTime(), description: '' }]);
  const stepDescriptionChanged = (event, id) => setSteps(steps.map(step => step.id === id ? { ...step, description: event.target.value } : step))

  const imageSelected = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => setCoverImage(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  const recipeTimeChanged = (event) => setRecipeTime(event.target.value);

  const submitRecipeForm = () => {
    if (!description || !name || !steps.length || !recipeTime || steps.some(step => !step.description)) {
      return dispatch(actionErrored('All required fields need values!'));
    }

    const recipeInfo = {
      ...recipe,
      description,
      name,
      steps,
      cover_image: coverImage,
      time: recipeTime
    };
    dispatch(recipe ? updateRecipeThunk(recipeInfo) : createRecipeThunk(recipeInfo));
    navigate('/view-recipes');
  }

  return (
    <div className="recipe-form-container">
      <Card className="recipe-form-card">
       <CardHeader
          title={ recipe ? 'Edit Recipe' : 'Add new Recipe' }
        >
        </CardHeader>
        <CardContent className="recipe-form-card-content">
          <Typography variant="h6">General Info</Typography>
          {
            coverImage && <CardMedia
              component="img"
              height="300"
              image={coverImage}
            />
          }
          
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="cover-image-upload"
            type="file"
            onChange={imageSelected}
          />
          <label htmlFor="cover-image-upload">
            <Button color="secondary" variant="contained" component="span" id="upload-cover-image-button">
              { coverImage ? 'Change Cover Image' : 'Upload Cover Image' }
            </Button>
          </label>

          <TextField variant="outlined" label='Recipe Name' value={name} onChange={nameChange} required error={!name} helperText={!name ? "Recipe name is required" : ''} />
          <TextField variant="outlined" label='Recipe Description' multiline={true} value={description} onChange={descriptionChange} required error={!description} helperText={!description ? 'Description is required' : ''} />
          <TextField variant="outlined" label='Time (in minutes) to Make' type="number" value={recipeTime} onChange={recipeTimeChanged} error={!recipeTime} helperText={!recipeTime ? 'Time is required' : ''}  />

          <Typography variant="h6">Steps</Typography>
          {
            steps.map((step, index) => (
              <TextField variant="outlined" label={`Step ${index + 1} Description`} key={step.id} value={step.description} error={!step.description} helperText={!step.description ? 'Step description is required' : ''} onChange={(event) => stepDescriptionChanged(event, step.id)} />
            ))
          }

          <Button color="secondary" variant="contained" onClick={stepAdded}>Add New Step</Button>
          <Button variant="contained" onClick={submitRecipeForm}>Submit</Button>
        </CardContent>
      </Card>
    </div>
  )
}