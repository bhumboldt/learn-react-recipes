import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6'>React Recipes</Typography>
        <Link to={'view-recipes'} className="header-button">
          <Typography variant="p">
            View Recipes
          </Typography>
        </Link>
        <Link to={'add-recipe'} className="header-button">
          <Typography variant="p">
            Add Recipe
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}