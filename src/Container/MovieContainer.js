import React, { Component, useState, useEffect } from "react";
import Search from "../Components/search/Search";
import "../search/styles/search.css";
import Row from "../row/Row";

const baseURL = "https://api.themoviedb.org/3";
const fetchURL =
  "/discover/tv?api_key=6474dfa62ead86fbe03075577c299213&with_network=123";

class MovieContainer extends Component {
  state = {
    movies: [],
    searchTerm: "",
  };

  componentDidMount() {
    axios.get(fetchURL)
      .then(res => {
      const movie = res.data
      console.log(movie)
    })
    };
  }
  // componentDidMount() {
  //   fetch(baseURL + fetchURL)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       console.log(data);
  //       // this.setState({ movies: data });
  //     });
  // }

  // we want to render all vehicles from our movie and create Vehicle components
  // console.log(props.vehicles);
  arrayOfMovies = () => {
    let filteredArray = this.state.movies.filter((movie) =>
      movie.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return filteredArray.map((movie) => <Row />);
  };

  searchChangeHandler = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <>
        <Search
          searchTerm={this.state.searchTerm}
          changeHandler={this.searchChangeHandler}
        />
        <div>{this.arrayOfMovies()}</div>
      </>
    );
  }
}
export default MovieContainer;

// export default function MovieContainer() {
//   const baseURL = "https://api.themoviedb.org/3";
//   const fetchURL =
//     "/discover/tv?api_key=6474dfa62ead86fbe03075577c299213&with_network=123";
//   const [searchValue, setSearchTerm] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);

//   const searchHandler = (e) => {
//     setSearchTerm(e.target.value);
//     console.log(e.target.value);
//   };

//   useEffect(() => {
//     async function fetchMovies() {
//       const response = await fetch(baseURL + fetchURL);
//       const movies = await response.json();
//       // console.log(movies);
//       setMovies(movies.results);
//     }
//     fetchMovies();
//   }, [fetchURL]);

//   useEffect(() => {
//     const results = movies.filter((movie) =>
//       movie.name.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     console.log(results);
//     setSearchResults(results);
//   }, [searchValue]);

//   return (
//     <>
//       <form className="searchForm">
//         <input
//           className="searchInput"
//           placeholder="Search movie name"
//           value={searchValue}
//           onChange={searchHandler}
//         ></input>
//       </form>
//       {/* <ul>
//         {searchResults.map((movie) => (
//           <Row id={movie.id} img={movie.backdrop_path} />
//         ))}
//       </ul> */}
//     </>
//   );
// }
