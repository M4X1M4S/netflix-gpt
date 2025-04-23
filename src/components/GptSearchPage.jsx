import React from "react";
import useGetLanguage from "../hooks/useGetLanguage";
import { useRef } from "react";
import { groq } from "../utils/groqAi";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestionResult } from "../utils/gptSlice";
import MovieList from "./MovieList";

const GptSearchPage = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const language = useGetLanguage();
  const headings = useSelector((state) => state.gpt.movieSuggestionNames);
  const dataForHeadings = useSelector((state) => state.gpt.movieSuggestionData);

  const tmdbMovies = async (keyword) => {
    const response = await fetch(
      `https://tmdb-proxy-server.vercel.app/api/tmdb?path=search/movie&query=${keyword}`
    );
    const json = await response.json();
    return json;
  };

  // const prompt =
  //   "Suggest me movies with keyword : " +
  //   inputRef.current.value +
  //   "place them in an array";
  const handleGptSearchBtnClick = async () => {
    if (!inputRef.current.value) {
      alert("Search box is empty");
      return;
    }
    try {
      const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
              "You are a movie recommendation system.BOth Bollywood and Hollywood. Suggest  movies based on the keyword or mood.First try finding the keyword matches",
          },
          {
            role: "user",
            content: `Suggest  movies based on the keyword or mood put them in an Array and response should have only  array: ${inputRef.current.value}`,
          },
        ],
        temperature: 0.5,
        max_completion_tokens: 1024,
        top_p: 1,
      });

      const suggestions = JSON.parse(response?.choices[0]?.message?.content);
      console.log(suggestions);

      const suggestedMoviesPromiseArray = suggestions.map((movie) =>
        tmdbMovies(movie)
      );
      const suggestedMovies = await Promise.all(suggestedMoviesPromiseArray);
      console.log(suggestedMovies);
      dispatch(addSuggestionResult({ suggestions, suggestedMovies }));
    } catch (error) {
      console.error("Error fetching GroqAI response:", error);
      alert("An error occurred while fetching movie suggestions.");
    }
  };

  return (
    <div className="">
      <img
        className=" w-full h-screen object-cover fixed absolute -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg"
        alt="Login-bg"
      />
      <div className="pt-[10%]">
        <div className="flex justify-center relative z-10  ">
          <input
            ref={inputRef}
            placeholder={language.gptSearchPlaceholder}
            className="h-12  bg-amber-50  mb-4 w-[30%] text-center rounded-l-md border-2 border-gray-300 focus:outline-none focus:border-red-600"
          />
          <button
            onClick={handleGptSearchBtnClick}
            className=" bg-red-600 border-2 border-red-600 rounded-r-sm  h-12 text-white p-2 mr-4 cursor-pointer hover:bg-red-700"
          >
            {language.search}
          </button>
        </div>
      </div>
      <div>
        {headings?.map((heading, index) => (
          <MovieList
            heading={heading}
            data={dataForHeadings[index].results}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchPage;
