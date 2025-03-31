import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignUp, setSignUp] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState(null);
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setError(message);
    if (message) return;

    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              console.log("user signed up");
              // Profile updated!
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email })
              );

              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage + " " + errorCode);
        });
    }
    if (!isSignUp) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage + " " + errorCode);
        });
    }
  };
  const toggleSignUp = () => {
    setSignUp(!isSignUp);
  };

  return (
    <div className="relative w-full h-screen">
      <Header />

      <img
        className=" w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg"
        alt="Login-bg"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[25%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black/70 p-6 rounded-xl text-white"
      >
        <h1 className="text-3xl text-center font-medium pt-5">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>

        {isSignUp && (
          <input
            ref={name}
            className="border-1 border-gray-600 block mx-auto w-[85%] mt-5 h-11 bg-gray-600 pl-3"
            type="Name"
            name="name"
            placeholder="Enter your name"
            required
          />
        )}
        <input
          ref={email}
          className="border-1 border-gray-600 block mx-auto w-[85%] mt-5 h-11 bg-gray-600 pl-3"
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <input
          ref={password}
          className="border-1 border-gray-600 rounded block mx-auto w-[85%] mt-5 h-11 bg-gray-600 pl-3"
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
        {error && (
          <p className="text-red-500 text-sm mt-5 ml-[7.5%] ">{error}</p>
        )}
        <button
          onClick={handleButtonClick}
          className=" border-2 border-red-600 rounded-sm mx-auto block w-[85%] mt-5 mb-5 h-11 bg-red-600"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p
          className="ml-[7.5%] text-gray-400 cursor-pointer pb-5"
          onClick={toggleSignUp}
        >
          {isSignUp
            ? "Already a user? Sign in now "
            : " New to Netflix? Sign up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
