import React from "react";
import useGetLanguage from "../hooks/useGetLanguage";

const GptSearchPage = () => {
  const language = useGetLanguage();

  return (
    <div className="">
      <img
        className=" w-full h-screen object-cover absolute -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg"
        alt="Login-bg"
      />
      <div className="pt-[10%]">
        <div className="flex justify-center relative z-10  ">
          <input
            placeholder={language.gptSearchPlaceholder}
            className="h-12  bg-amber-50  mb-4 w-[30%] text-center rounded-l-md border-2 border-gray-300 focus:outline-none focus:border-red-600"
          />
          <button className=" bg-red-600 border-2 border-red-600 rounded-r-sm  h-12 text-white p-2 mr-4 cursor-pointer hover:bg-red-700">
            {language.search}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GptSearchPage;
