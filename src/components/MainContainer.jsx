import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const nowPlayingVideos = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );
  if (!nowPlayingVideos) return;

  const { title, overview, id } = nowPlayingVideos[0];

  return (
    <div className="relative w-full h-[100vh]">
      <VideoTitle title={title} overview={overview} />
      {/* <VideoBackground videoId={id} /> */}
    </div>
  );
};

export default MainContainer;
