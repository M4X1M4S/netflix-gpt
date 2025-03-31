import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[55%] left-[10%] w-[45%]">
      <h1 className="text-7xl font-semibold">{title}</h1>
      <h2 className="text-3xl ">{overview}</h2>
      <button className="p-5 border-2 text-2xl font-medium mr-2 mt-2">
        Play
      </button>
      <button className="p-5 border-2 text-2xl font-medium ml-2 mt-2">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
