import "./App.css";
import Nav from "./Componenets/Nav/Nav";
import Movieslist from "./Componenets/Movieslist/Movieslist";
import { moviesData } from "./Constants/Data";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Moviedetails from "./Componenets/Movieslist/Moviedetails";
import { Rating } from "@mui/material";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [change, setChange] = useState("");
  const [rate, setRate] = useState(0);
  console.log();
  return (
    <div>
      <Nav setchange={setChange} rate={rate} setRate={setRate} />

      <Routes>
        <Route
          path="/"
          element={
            <Movieslist
              movies={movies}
              change={change}
              setMovies={setMovies}
              rate={rate}
            />
          }
        ></Route>
        <Route
          path="/Moviedetails/:id"
          element={<Moviedetails movies={movies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
