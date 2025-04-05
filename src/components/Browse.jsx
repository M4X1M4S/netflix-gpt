import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies(); // Custom hook to fetch now playing movies
  return (
    /*Header
     Maincontainer
         - vvideo bg
         - movie title
      secondary container
         - movie list*n 
            -cards*n    */
    <div className="flex flex-col">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
