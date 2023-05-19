// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu8gk6eL4-T6GeILU2GU9xUG01N4xBMVk",
  authDomain: "toy-room.firebaseapp.com",
  projectId: "toy-room",
  storageBucket: "toy-room.appspot.com",
  messagingSenderId: "302521066666",
  appId: "1:302521066666:web:50e966cbac8759b7fd1cd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;