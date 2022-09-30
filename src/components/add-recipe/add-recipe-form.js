import { Card, CardHeader, Button, CardContent, TextField, Typography } from "@mui/material"
import { useState } from "react";
import './add-recipe-form.css';

export const AddRecipeForm = () => {
  const [name, setName] = useState('');
  const nameChange = (event) => setName(event.target.value);

  const [description, setDescription] = useState('');
  const descriptionChange = (event) => setDescription(event.target.value);

  const [steps, setSteps] = useState([]);
  const stepAdded = () => setSteps([...steps, { id: new Date().getTime(), description: '' }]);
  const stepDescriptionChanged = (event, id) => setSteps(steps.map(step => step.id === id ? { ...step, description: event.target.value } : step))


  return (
    <div className="recipe-form-container">
      <Card className="recipe-form-card">
       <CardHeader
          title='Add new Recipe'
        >
        </CardHeader>
        <CardContent className="recipe-form-card-content">
        <Typography variant="h6">General Info</Typography>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="cover-image-upload"
            type="file"
          />
          <label htmlFor="cover-image-upload">
            <Button component="span" id="upload-cover-image-button">
              Upload Cover Image
            </Button>
          </label>

          <TextField variant="outlined" label='Recipe Name' value={name} onChange={nameChange} />
          <TextField variant="outlined" label='Recipe Description' multiline={true} value={description} onChange={descriptionChange} />

          <Typography variant="h6">Steps</Typography>
          {
            steps.map((step, index) => (
              <TextField variant="outlined" label={`Step ${index + 1} Description`} key={step.id} value={step.description} onChange={(event) => stepDescriptionChanged(event, step.id)} />
            ))
          }

          <Button onClick={stepAdded}>Add New Step</Button>
        </CardContent>
      </Card>
    </div>
  )
}