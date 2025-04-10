import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  //MovieList -popular
  //MovieList -now playing
  //MovieList -upcoming
  //MovieList -top rated
  //moviecard*n
  //MovieList -popular
  //MovieList -popular

  const nowPlayingVideos = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movie?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movie?.upcomingMovies);
  return (
    <div className="bg-black text-white">
      <MovieList data={nowPlayingVideos} heading={"Now Playing"} />
      <MovieList data={popularMovies} heading={"Popular"} />
      <MovieList data={topRatedMovies} heading={"Top rated"} />
      <MovieList data={upcomingMovies} heading={"Upcoming"} />
    </div>
  );
};

export default SecondaryContainer;
