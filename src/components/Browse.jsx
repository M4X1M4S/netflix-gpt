import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies(); // Custom hook to fetch now playing movies
  usePopularMovies(); // Custom hook to fetch popular movies
  useUpcomingMovies(); // Custom hook to fetch upcoming movies
  useTopRatedMovies(); // Custom hook to fetch top rated movies
  return (
    /*Header
     Maincontainer
         - vvideo bg
         - movie title
      secondary container
         - movie list*n 
            -cards*n    */
    <div className="overflow-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
