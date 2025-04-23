import React, { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (videoId) => {
  const dispatch = useDispatch();
  console.log("indside movie trailer", videoId);
  const videoBackground = useSelector((state) => state.movie.trailerVideo);

  const getVideoBackground = async (videoId) => {
    const reponse = await fetch(
      `https://tmdb-proxy-server.vercel.app/api/tmdb?path=movie/${videoId}/videos`
    );
    const data = await reponse.json();
    const filteredData = data.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    const trailer = filteredData.length ? filteredData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
    console.log("trailer added", trailer);
  };

  useEffect(() => {
    !videoBackground && getVideoBackground(videoId);
  }, []);
};

export default useMovieTrailer;
