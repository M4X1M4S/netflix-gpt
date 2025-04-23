import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);
  const getNowplayingMovies = async () => {
    // Fetch data from TMDB API and update the Redux store
    const response = await fetch(
      "https://tmdb-server.vercel.app/api/tmdb?path=movie/now_playing"
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    !nowPlayingMovies && getNowplayingMovies(); //
  }, []);
};

export default useNowPlayingMovies;
