import React from "react";

const MovieCard = ({ data }) => {
  console.log(data);
  if (!data) return null;
  return (
    <div className="flex gap-8 overflow-x-auto p-4 scroll-m-1.5 ">
      {data.map((movie, index) => (
        <div key={index} className="min-w-[200px] hover:scale-105 ">
          <img
            className="rounded-xs"
            src={
              `https://tmdb-server.vercel.app/api/tmdb/image?file_path=${movie.poster_path}` +
              "&size=w342"
            }
            alt="Movie Poster"
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
