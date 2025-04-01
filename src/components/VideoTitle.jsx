import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-40 px-24 pt-[10%] mt-[5%] text-white ">
      <h1 className="text-7xl font-semibold mb-4">{title}</h1>
      <p className="text-xl w-1/4 mb-4">{overview}</p>
      <button className=" px-5 p-3 border-2 text-2xl font-medium mr-2 mt-2">
        ▸ Play
      </button>
      <button className="p-3 border-2 text-2xl font-medium ml-2 mt-2">
        ⓘ More Info
      </button>
    </div>
  );
};

export default VideoTitle;
