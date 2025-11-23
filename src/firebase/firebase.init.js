// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJY-Oef6rdM-D71oIfq7pVyy5SPwf4Qd8",
  authDomain: "freelance-marketplace-7ce40.firebaseapp.com",
  projectId: "freelance-marketplace-7ce40",
  storageBucket: "freelance-marketplace-7ce40.firebasestorage.app",
  messagingSenderId: "1068693521460",
  appId: "1:1068693521460:web:15c00ec40a784b35b4b661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);