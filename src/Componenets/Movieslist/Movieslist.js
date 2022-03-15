import React from "react";
import Moviecard from "../Movieslist/Moviecard";
import AddMovie from "./AddMovie";
const Movieslist = ({ movies, change, setMovies, rate }) => {
  console.log("movies", movies);
  console.log("rate", rate);
  return (
    <div
      style={{
        paddingTop: "30px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {movies
          .filter(
            (movie) =>
              movie.name.toLowerCase().includes(change.toLowerCase().trim()) &&
              movie.rating >= rate
          )

          .map((movie) => (
            <Moviecard movie={movie} />
          ))}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <AddMovie movies={movies} setMovies={setMovies}></AddMovie>
      </div>
    </div>
  );
};
export default Movieslist;
