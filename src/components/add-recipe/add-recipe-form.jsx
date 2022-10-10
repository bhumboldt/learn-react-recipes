import { Card, CardHeader, Button, CardContent, Typography, CardMedia } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectRecipeById } from '../../state/recipes/recipe-selectors';
import { createRecipeThunk, updateRecipeThunk } from '../../state/recipes/recipe-thunks';
import './add-recipe-form.css';
import { createRecipeObject } from '../../utils/create-recipe-object';
import React from 'react';
import {FieldArray, Form, Formik} from 'formik';
import {TextInput} from '../form-components/text-input/text-input';
import * as Yup from 'yup';

export const AddRecipeForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const recipe = useSelector(selectRecipeById);

	const imageSelected = (event, setFieldCallback, fieldName) => {
		const file = event.target.files[0];
		const fileReader = new FileReader();
		fileReader.onload = () => setFieldCallback(fieldName, fileReader.result);
		fileReader.readAsDataURL(file);
	};

	const submitRecipe = (description, name, steps, recipeTime, coverImage, recipe) => {
		const recipeObj = createRecipeObject(description, name, steps, recipeTime, coverImage, recipe);
		dispatch(recipe ? updateRecipeThunk(recipeObj) : createRecipeThunk(recipeObj));
		navigate('/view-recipes');
	};

	const submitClicked = ({ description, name, steps, time, cover_image }) => submitRecipe(description, name, steps, time, cover_image, recipe);

	return (
		<div className="recipe-form-container">
			<Card className="recipe-form-card">
				<CardHeader
					title={ recipe ? 'Edit Recipe' : 'Add new Recipe' }
				>
				</CardHeader>
				<CardContent className="recipe-form-card-content">
					<Formik 
						initialValues={{
							name: recipe ? recipe.name : '',
							description: recipe ? recipe.description : '',
							time: recipe ? recipe.time : 0,
							cover_image: recipe ? recipe.cover_image : null,
							steps: recipe ? recipe.steps : []
						}}
						validationSchema={Yup.object({
							name: Yup.string()
								.required('Name is a required field'),
							description: Yup.string()
								.required('Description is a required field'),
							time: Yup.number()
								.required('Time is a required field')
								.min(1, 'Time must be greater than 0'),
							cover_image: Yup.string().nullable()
								.required('Cover image is required'),
							steps: Yup.array()
								.of(Yup.object({
									description: Yup.string()
										.required('Step description is required')
								}))
								.length(1, 'At least 1 step is required')
						})}
						onSubmit={(values) => submitClicked(values)}>
						{
							props => {
								console.log(props.errors);
								return (
									<Form>
										<Typography variant="h6">General Info</Typography>
										{
											props.values.cover_image && <CardMedia
												component="img"
												height="300"
												image={props.values.cover_image}
											/>
										}
										{ props.touched.cover_image && props.errors.cover_image && <Typography className='recipe-field-error-text' variant='p' color='error'>{ props.errors.cover_image}</Typography> }
										<input
											accept="image/*"
											style={{display: 'none'}}
											id="cover-image-upload"
											type="file"
											name='cover_image'
											onChange={(event) => imageSelected(event, props.setFieldValue, 'cover_image')}
										/>
										<label htmlFor="cover-image-upload">
											<Button color="secondary" className='form-button' variant="contained" component="span" id="upload-cover-image-button">
												{props.values.cover_image ? 'Change Cover Image' : 'Upload Cover Image'}
											</Button>
										</label>

										<TextInput label='Recipe Name' name='name' type='text' required/>
										<TextInput label='Recipe Description' name='description' multiline={true} required/>
										<TextInput label='Time (in minutes) to Make' name='time' type="number" required/>
										<Typography variant="h6">Steps</Typography>
										<FieldArray name='steps'>
											{
												({ push }) => (
													<>
														{
															props.values.steps.map((step, index) => (
																<TextInput variant="outlined" key={index} label={`Step ${index + 1} Description`} name={`steps.${index}.description`} required />
															))
														}
														{ props.touched.steps && props.errors.steps && typeof props.errors.steps === 'string' && <Typography className='recipe-field-error-text' variant='p' color='error'>{ props.errors.steps}</Typography> }
														<Button color="secondary" className='form-button' variant="contained" onClick={() => push({ description: '', id: new Date().getTime() })}>Add New Step</Button>
													</>
												)
											}
										</FieldArray>
										<Button id='submit-button' variant="contained" className='form-button' onClick={props.submitForm}>Submit</Button>
									</Form>
								);
							}
						}
					</Formik>
				</CardContent>
			</Card>
		</div>
	);
};