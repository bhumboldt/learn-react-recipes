import { Card, CardHeader, Button, CardContent, TextField, Typography, CardMedia } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipeThunk } from "../../state/recipes/recipe-thunks";
import './add-recipe-form.css';

export const AddRecipeForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const nameChange = (event) => setName(event.target.value);

  const [description, setDescription] = useState('');
  const descriptionChange = (event) => setDescription(event.target.value);

  const [steps, setSteps] = useState([]);
  const stepAdded = () => setSteps([...steps, { id: new Date().getTime(), description: '' }]);
  const stepDescriptionChanged = (event, id) => setSteps(steps.map(step => step.id === id ? { ...step, description: event.target.value } : step))

  const [coverImage, setCoverImage] = useState('');
  const imageSelected = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => setCoverImage(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  const [recipeTime, setRecipeTime] = useState(0);
  const recipeTimeChanged = (event) => setRecipeTime(event.target.value);

  const submitRecipeForm = () => {
    dispatch(createRecipeThunk({
      description,
      name,
      steps,
      cover_image: coverImage,
      time: recipeTime
    }));
  }

  return (
    <div className="recipe-form-container">
      <Card className="recipe-form-card">
       <CardHeader
          title='Add new Recipe'
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
              Upload Cover Image
            </Button>
          </label>

          <TextField variant="outlined" label='Recipe Name' value={name} onChange={nameChange} required />
          <TextField variant="outlined" label='Recipe Description' multiline={true} value={description} onChange={descriptionChange} required />
          <TextField variant="outlined" label='Time (in minutes) to Make' type="number" value={recipeTime} onChange={recipeTimeChanged} />

          <Typography variant="h6">Steps</Typography>
          {
            steps.map((step, index) => (
              <TextField variant="outlined" label={`Step ${index + 1} Description`} key={step.id} value={step.description} onChange={(event) => stepDescriptionChanged(event, step.id)} />
            ))
          }

          <Button color="secondary" variant="contained" onClick={stepAdded}>Add New Step</Button>
          <Button variant="contained" onClick={submitRecipeForm}>Submit</Button>
        </CardContent>
      </Card>
    </div>
  )
}