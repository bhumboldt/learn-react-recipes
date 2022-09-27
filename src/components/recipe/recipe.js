import { AccessTimeOutlined, Grade } from "@mui/icons-material";
import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import './recipe.css';

export const Recipe = ({ num }) => {
  return (
    <Card className="recipe">
      <CardHeader
      title={`Recipe ${num}`}
      >
      </CardHeader>
      <CardMedia
        component="img"
        height="400"
        image="https://via.placeholder.com/1000x1000"
        alt="Paella dish"
      />
      <CardContent>
        <Stack className="card-info" direction="row" alignItems="center" gap="8px">
          <AccessTimeOutlined></AccessTimeOutlined>
          <Typography variant="p">3 min.</Typography>

          <Grade></Grade>
          <Typography variant="p">4.2 / 5</Typography>
        </Stack>
        
        <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
      </CardContent>
    </Card>
  )
}