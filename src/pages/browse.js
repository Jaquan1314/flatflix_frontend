import React from "react";
import requests from "../requests";
import Row from "../Components/row/Row";

export default function Browse() {
  return (
    <>
      {/* Nav */}
      {/* <Banner /> */}
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Flatflix ORIGINALS"
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}
