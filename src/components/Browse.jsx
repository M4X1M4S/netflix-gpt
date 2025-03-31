import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies(); // Custom hook to fetch now playing movies
  return (
    /*Maincontainer
         - vvideo bg
         - movie title
      secondary container
         - movie list*n 
            -cards*n    */
    <div>
      <Header />
    </div>
  );
};

export default Browse;
