// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS33OlPWE0gyJgf7scittr76xqbFdTJnU",
  authDomain: "loginautentication-4b49a.firebaseapp.com",
  projectId: "loginautentication-4b49a",
  storageBucket: "loginautentication-4b49a.firebasestorage.app",
  messagingSenderId: "439795737521",
  appId: "1:439795737521:web:01da7a0c20e904c63c5390",
  measurementId: "G-ECRBRNFC3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); 
export {auth,googleProvider};     
