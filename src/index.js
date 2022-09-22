import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmEjyRWgGriXMOMYwa8zoTKloU7BLo7uk",
  authDomain: "coderhouse-ecommerce-d24ca.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d24ca",
  storageBucket: "coderhouse-ecommerce-d24ca.appspot.com",
  messagingSenderId: "413598089589",
  appId: "1:413598089589:web:6b90b80fb391e0568cd33c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
