// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC90p0p2V3o5Di38KeDcl61v62fo9HEyvY",
  authDomain: "task-hub-43c19.firebaseapp.com",
  projectId: "task-hub-43c19",
  storageBucket: "task-hub-43c19.firebasestorage.app",
  messagingSenderId: "76104572218",
  appId: "1:76104572218:web:86d9881c6c4a5e0e11c403",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
