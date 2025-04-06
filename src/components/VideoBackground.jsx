import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ videoId }) => {
  console.log("mounting video background", videoId);
  useMovieTrailer(videoId);
  const trailer = useSelector((store) => store.movie.trailerVideo);
  console.log(trailer);
  if (!trailer) return null;
  console.log("trailer", trailer.key);
  return (
    <div class="w-screen h-screen overflow-hidden pointer-events-none">
      <iframe
        className="min-w-full min-h-full scale-[1.4] "
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&showinfo=0`}
        title="Background Trailer"
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
