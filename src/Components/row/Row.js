import React, { useState, useEffect } from "react";
import "../row/styles/row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";
  const baseURL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(baseURL + fetchUrl);
      const movies = await response.json();
      // console.log(movies);
      setMovies(movies.results);
    }
    fetchMovies();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="posters">
        {movies.map((movie) => (
          <img
            className={`poster ${isLargeRow && "largePoster"}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${imgBaseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
