import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ data, heading }) => {
  return (
    <div className="">
      <span>{heading}</span>
      <MovieCard data={data} />
    </div>
  );
};

export default MovieList;
