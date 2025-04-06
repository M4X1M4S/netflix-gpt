import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { NETFLIX_LOGO_URL, USER_AVATAR_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  return (
    <div className="absolute w-full flex justify-between pr-6  z-10  bg-opacity-0  ">
      <img
        className="h-20  m-3 ml-6"
        src={NETFLIX_LOGO_URL}
        alt="Netflix_logo"
      />
      {user && (
        <div className="flex mt-8 ">
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
