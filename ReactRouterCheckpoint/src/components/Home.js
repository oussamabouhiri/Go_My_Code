import React from "react";
import { movies } from "../data/movies";
import MovieCard from "./MovieCard";

function Home() {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
