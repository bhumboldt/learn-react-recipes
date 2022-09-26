import { Card, CardHeader } from "@mui/material"
import './recipe.css';

export const Recipe = ({ num }) => {
  return (
    <Card className="recipe">
      <CardHeader
      title={`Recipe ${num}`}
      >
      </CardHeader>
    </Card>
  )
}