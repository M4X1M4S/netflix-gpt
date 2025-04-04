import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="z-40 px-24 pt-[10%] mt-[4%] text-white w-screen h-screen bg-gradient-to-r from-black/50 to-transparent">
      <h1 className="text-7xl  mb-4 font-semibold">{title}</h1>
      <p className="text-xl w-1/4 mb-4">{overview}</p>
      <button className=" px-5 p-3 border-2 text-2xl font-bold mr-2 mt-2 bg-gray-500/50 hover:bg-gray-600 rounded-xs">
        ▸ Play
      </button>
      <button className="p-3 border-2 text-2xl font-medium ml-2 mt-2">
        ⓘ More Info
      </button>
    </div>
  );
};

export default VideoTitle;
