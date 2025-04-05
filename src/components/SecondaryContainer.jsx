import React from "react";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  //MovieList -popular
  //MovieList -now playing
  //MovieList -upcoming
  //MovieList -top rated
  //moviecard*n
  //MovieList -popular
  //MovieList -popular
  return (
    <div>
      <MovieList />
      <MovieList />
      <MovieList />
    </div>
  );
};

export default SecondaryContainer;
