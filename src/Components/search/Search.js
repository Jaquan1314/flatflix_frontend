import React, { useState, useEffect } from "react";
import "../search/styles/search.css";
import Row from "../row/Row";

function Search(props) {
  // const baseURL = "https://api.themoviedb.org/3";
  // const fetchURL =
  //   "/discover/tv?api_key=6474dfa62ead86fbe03075577c299213&with_network=123";
  // const [searchValue, setSearchTerm] = useState("");
  // const [movies, setMovies] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);

  // const searchHandler = (e) => {
  //   setSearchTerm(e.target.value);
  //   console.log(e.target.value);
  // };

  // useEffect(() => {
  //   async function fetchMovies() {
  //     const response = await fetch(baseURL + fetchURL);
  //     const movies = await response.json();
  //     // console.log(movies);
  //     setMovies(movies.results);
  //   }
  //   fetchMovies();
  // }, [fetchURL]);

  // useEffect(() => {
  //   const results = movies.filter((movie) =>
  //     movie.name.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   console.log(results);
  //   setSearchResults(results);
  // }, [searchValue]);

  return (
    <>
      <form className="searchForm">
        <input
          className="searchInput"
          placeholder="Search movie name"
          value={props.searchValue}
          onChange={props.searchHandler}
        ></input>
      </form>
      {/* <ul>
        {searchResults.map((movie) => (
          <Row id={movie.id} img={movie.backdrop_path} />
        ))}
      </ul> */}
    </>
  );
}

export default Search;
