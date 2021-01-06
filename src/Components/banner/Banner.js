import React, { useState, useEffect } from "react";
import requests from "../../requests";
import "../banner/styles/banner.css";

export default function Banner() {
  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";
  const baseURL = "https://api.themoviedb.org/3";
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchDetails() {
      const resp = await fetch(baseURL + requests.fetchTrending);
      const movie = await resp.json();
      setMovie(movie.results[Math.floor(Math.random() * movie.results.length)]);
      return movie;
    }
    fetchDetails();
  }, []);

  console.log(movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${imgBaseUrl}${movie?.backdrop_path})`,
      }}
    >
      <div className="banner-info">
        {/* Background img */}
        <h1 className="banner-title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <h1 className="overview">{truncate(movie?.overview, 200)}</h1>
        <br />
        <div className="banner-btns">
          <button className="banner-playBtn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
      </div>
      <div className="bannerFade" />
    </header>
  );
}
