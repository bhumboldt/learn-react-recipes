import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root';
import { RecipeList } from './components/recipe-list/recipe-list';
import { AddRecipe } from './routes/add-recipe';
import { Provider } from 'react-redux';
import store from './state/store';
import { ViewRecipe } from './routes/view-recipe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'view-recipes',
        element: <RecipeList />
      },
      {
        path: 'add-recipe',
        element: <AddRecipe />
      },
      {
        path: 'recipes/:id/view',
        element: <ViewRecipe />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
