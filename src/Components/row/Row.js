import React, { useState, useEffect } from "react";
import "../row/styles/row.css";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";
  const baseURL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(baseURL + fetchUrl);
      const movies = await response.json();
      // console.log(movies);
      setMovies(movies.results);
    }
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="posters">
        {movies.map((movie) => (
          <img
            className={`poster ${isLargeRow && "largePoster"}`}
            key={movie.id}
            src={`${imgBaseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}
