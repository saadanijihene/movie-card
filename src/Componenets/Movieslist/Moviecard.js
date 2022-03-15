import react from "react";
import { movielist } from "../Movieslist/Movieslist";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Moviedetails from "./Moviedetails";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

import { Rating, Stack } from "@mui/material";

function Moviecard({ movie }) {
  return (
    <div key={movie.id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="500"
          image={movie.image}
          alt="movie.name"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3> {movie.name}</h3>
            <h4> {movie.type}</h4>
            <h5> {movie.date}</h5>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>{movie.description}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Stack spacing={1}>
            <Rating name="size-large" size="large" value={movie.rating} />
          </Stack>
        </CardActions>
        <CardActions>
          <Link to={`/Moviedetails/${movie.id}`}>
            <Button size="small">details </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
export default Moviecard;
