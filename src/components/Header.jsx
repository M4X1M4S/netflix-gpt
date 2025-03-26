import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });

    console.log(user);
  };
  return (
    <div className="absolute  w-full bg-gradient-to-b from-black left-1/2 -translate-x-1/2 flex justify-between">
      <img
        className="h-20  m-3 ml-6"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix_logo"
      />
      {user && (
        <div className="flex mt-8 ">
          <img
            className="h-10 mx-2 "
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            alt="user-profile-picture"
          />
          <button
            onClick={handleSignOut}
            className="p-2 rounded-sm bg-red-600 h-10 text-white mr-9 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
