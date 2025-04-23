import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  const getTopRatedMovies = async () => {
    // Fetch data from TMDB API and update the Redux store
    const response = await fetch(
      "https://tmdb-server.vercel.app/api/tmdb?path=movie/top_rated"
    );
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies(); //
  }, []);
};

export default useTopRatedMovies;
