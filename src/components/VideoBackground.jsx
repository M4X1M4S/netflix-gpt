import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ videoId }) => {
  useMovieTrailer(videoId);
  const trailer = useSelector((store) => store.movie?.trailerVideo);
  console.log(trailer);

  return (
    <div className=" text-9xl h-screen w-screen bg-gradient-to-r from-black to-white">
      {/* <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&controls=0&showinfo=0&modestbranding=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
      <iframe
        className="absolute top-1/2 left-1/2 w-[220vw] h-[135vh] -translate-x-1/2 -translate-y-1/2  "
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}&controls=0&showinfo=0&modestbranding=1&rel=0`}
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
