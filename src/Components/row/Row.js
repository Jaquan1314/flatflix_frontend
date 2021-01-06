import React, { useState, useEffect } from "react";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = fetch(fetchUrl).then((resp) => resp.json());
      console.log(request);
      return request;
    }
    fetchMovies();
  });

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
