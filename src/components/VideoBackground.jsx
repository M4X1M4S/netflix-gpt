import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ videoId }) => {
  useMovieTrailer(videoId);
  const trailer = useSelector((store) => store.movie?.trailerVideo);
  console.log(trailer);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-screen h-screen object-cover"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&controls=0&showinfo=0&modestbranding=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
