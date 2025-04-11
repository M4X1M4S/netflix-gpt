import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ data, heading }) => {
  return (
    <div className="">
      <span className="text-3xl font-semibold pl-8">{heading}</span>
      <MovieCard data={data} />
    </div>
  );
};

export default MovieList;
