import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const getPopularMovies = async () => {
    // Fetch data from TMDB API and update the Redux store
    const response = await fetch(
      "https://tmdb-server.vercel.app/api/tmdb?path=movie/popular"
    );
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies(); //
  }, []);
};

export default usePopularMovies;
