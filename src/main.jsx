import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoxKh61DVVCDmufBZO66eVdnJkCb-xBWg",
  authDomain: "final-project-react-67f6c.firebaseapp.com",
  projectId: "final-project-react-67f6c",
  storageBucket: "final-project-react-67f6c.appspot.com",
  messagingSenderId: "1067341644040",
  appId: "1:1067341644040:web:911e62776d677264b6acbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
