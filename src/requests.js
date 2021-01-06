const KEY = "6474dfa62ead86fbe03075577c299213";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${KEY}&language=en-US`,
  fetchFlatflixOriginals: `/discover/tv?api_key=${KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${KEY}&with_genres=99`,
};

export default requests;