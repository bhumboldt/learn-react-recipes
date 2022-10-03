import { AccessTimeOutlined, Grade } from "@mui/icons-material";
import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import './recipe.css';

export const Recipe = ({ name, description, cover_image, time }) => {
  return (
    <Card className="recipe">
      <CardHeader
        title={name}
      >
      </CardHeader>
      <CardMedia
        component="img"
        height="300"
        image={cover_image || "https://via.placeholder.com/1000x1000"}
      />
      <CardContent>
        <Stack className="card-info" direction="row" alignItems="center" gap="8px">
          <AccessTimeOutlined></AccessTimeOutlined>
          <Typography variant="p">{time} min.</Typography>

          <Grade></Grade>
          <Typography variant="p">4.2 / 5</Typography>
        </Stack>
        
        <Typography variant="p">{description}</Typography>
      </CardContent>
    </Card>
  )
}