// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";

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
const handleGoogleLogin=async(setError)=>{
  try{
    const result=await signInWithPopup(auth,googleProvider);
    console.log('Google Sign-In:',result.user)
    setError('');
  }
  catch(err){
    console.log(err);
    setError('Google Sign-In Failed');
  }
}
//handle login using email and password
const handleSubmit=async(e.setError)=>{
  e.preventDefault();
  const email=e.target.email.value;
  const password=e.target.password.value;
  try{
    
  }
  catch(err){
    
  }
}
export {auth,googleProvider,handleGoogleLogin};     
