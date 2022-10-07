import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootRoute } from './routes/root-route';
import { AddRecipeRoute } from './routes/add-recipe-route';
import { Provider } from 'react-redux';
import { setupStore } from './state/store';
import { ViewRecipeRoute} from './routes/view-recipe-route';
import { ViewRecipesRoute } from './routes/view-recipes-route';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootRoute />,
		children: [
			{
				path: 'view-recipes',
				element: <ViewRecipesRoute />
			},
			{
				path: 'add-recipe',
				element: <AddRecipeRoute />
			},
			{
				path: 'recipes/:id/view',
				element: <ViewRecipeRoute />
			},
			{
				path: 'recipes/:id/edit',
				element: <AddRecipeRoute />
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={setupStore({})}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
