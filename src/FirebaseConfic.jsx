// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN_SECOauFBPG4gbewXibklNmXLkGBnYg",
  authDomain: "quiz-app-users.firebaseapp.com",
  projectId: "quiz-app-users",
  storageBucket: "quiz-app-users.appspot.com",
  messagingSenderId: "209982667881",
  appId: "1:209982667881:web:1c6b3e1c01ef977db936f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app