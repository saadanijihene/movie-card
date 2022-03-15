import { Block } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

function Moviedetails({ movies }) {
  let { id } = useParams();

  return (
    <div>
      {movies
        .filter((movie) => movie.id == id)
        .map((movie) => (
          <div key={movie.id} style={{ textAlign: "center" }}>
            <img
              src={movie.image}
              alt={movie.name}
              height="500px"
              width={400}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h3> {movie.name}</h3>
                <h3> {movie.type}</h3>
                <h3> {movie.date}</h3>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ color: "black" }}
              >
                <p>{movie.description}</p>
              </Typography>
            </CardContent>
          </div>
        ))}
    </div>
  );
}
export default Moviedetails;
