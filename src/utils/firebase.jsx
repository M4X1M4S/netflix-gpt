// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlYf4hQURTgp-pgGlJo7pLDOfusqisTBc",
  authDomain: "netflix-gpt-82882.firebaseapp.com",
  projectId: "netflix-gpt-82882",
  storageBucket: "netflix-gpt-82882.firebasestorage.app",
  messagingSenderId: "679231764261",
  appId: "1:679231764261:web:2208c4e27b35cb51d84ccc",
  measurementId: "G-D2P49Z06XR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
