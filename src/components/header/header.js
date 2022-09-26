import { AppBar, Toolbar, Typography } from '@mui/material';
import './header.css';

export const Header = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6'>React Recipes</Typography>
      </Toolbar>
    </AppBar>
  )
}