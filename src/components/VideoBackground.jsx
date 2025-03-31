import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const VideoBackground = ({ videoId }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movie?.trailerVideo);

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
  };

  useEffect(() => {
    getVideoBackground(videoId);
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/c8sf0c-cjzQ?si=${trailer?.key}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
