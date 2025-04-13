import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { NETFLIX_LOGO_URL, USER_AVATAR_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchBtn } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptSearch = useSelector((state) => state.gpt.gptSearchBtn);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        // User is signed out
        navigate("/");
      }
    });
    return () => {
      unsubscribe(); // // Cleanup function to remove the previous listener
    };
  }, []);

  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };
  const handleGptSearchBtnClick = () => {
    dispatch(toggleGptSearchBtn());
  };
  const handleLanguage = (identifier) => {
    dispatch(setLanguage(identifier));
  };
  return (
    <div className="absolute w-full flex justify-between pr-6  z-10  bg-opacity-0  bg-gradient-to-b from-black to-transparent">
      <img
        className="h-20  m-3 ml-6"
        src={NETFLIX_LOGO_URL}
        alt="Netflix_logo"
      />
      {user && (
        <div className="flex mt-8 ">
          {gptSearch && (
            <select
              onChange={(e) => handleLanguage(e.target.value)}
              className="text-white mb-8 ml-3 w-auto text-right mr-4 relative z-20 cursor-pointer"
              name="languages"
              id="languages"
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option
                  className="bg-gray-800 text-white text-left"
                  key={language.identifier}
                  value={language.identifier}
                >
                  {language.identifier}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchBtnClick}
            className=" bg-red-600  h-10 b text-white p-2 mr-4 cursor-pointer hover:bg-red-700"
          >
            {gptSearch ? "Homepage" : "GPTsearch"}
          </button>
          <img
            className="h-10 mx-2 "
            src={USER_AVATAR_URL}
            alt="user-profile-picture"
          />
          <button
            onClick={handleSignOut}
            className="p-2 rounded-sm bg-red-600 h-10 text-white mr-9 cursor-pointer hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
