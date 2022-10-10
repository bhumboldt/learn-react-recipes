import {useField} from 'formik';
import {TextField} from '@mui/material';
import React from 'react';
import './text-input.css';

export const TextInput = ({ ...props }) => {
	const [field, meta] = useField(props.name);
    
	return (
		<TextField
			className='text-field'
			variant="outlined"
			{...field}
			{...props}
			error={Boolean(meta.touched && meta.error)}
			helperText={meta.touched && meta.error ? meta.error : ''}
		/>
	);
};