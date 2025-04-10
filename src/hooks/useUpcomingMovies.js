import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    // Fetch data from TMDB API and update the Redux store
    const response = await fetch(
      "https://tmdb-server.vercel.app/api/tmdb?path=movie/upcoming"
    );
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };
  useEffect(() => {
    getPopularMovies(); //
  }, []);
};

export default useUpcomingMovies;
