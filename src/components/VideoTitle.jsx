const VideoTitle = ({ title, overview }) => {
  return (
    <div className="relative  z-10">
      <div className="absolute top-56 left-10 text-white max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl w-full md:w-2/3 mb-4">{overview}</p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 text-lg md:text-2xl font-bold bg-white text-black rounded hover:bg-gray-300 transition">
            ▸ Play
          </button>
          <button className="px-6 py-3 text-lg md:text-2xl font-semibold bg-gray-600/70 text-white rounded hover:bg-gray-700 transition">
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
