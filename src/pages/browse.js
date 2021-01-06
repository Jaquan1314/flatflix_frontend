import React from "react";
import requests from "../requests";
import Row from "../Components/row/Row";
import Banner from "../Components/banner/Banner";
import Navbar from "../Components/navbar/Navbar";
import { FooterContainer } from "../Container/Footer";

export default function Browse() {
  return (
    <>
      <Navbar />
      <Banner />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Flatflix Originals"
        isLargeRow
        fetchUrl={requests.fetchFlatflixOriginals}
      />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <FooterContainer />
    </>
  );
}
