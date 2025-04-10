import React from "react";

const MovieCard = ({ data }) => {
  console.log(data);
  if (!data) return null;
  return (
    <div className="flex ">
      {data.map((movie, index) => (
        <div key={index}>
          <img
            className=""
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
