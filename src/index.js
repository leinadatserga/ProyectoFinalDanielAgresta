import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIAc-Sg2ujSGohByTXj42-yMFCUHoWsGA",
  authDomain: "agrestaguzmanseguridadintegral.firebaseapp.com",
  projectId: "agrestaguzmanseguridadintegral",
  storageBucket: "agrestaguzmanseguridadintegral.appspot.com",
  messagingSenderId: "530965963177",
  appId: "1:530965963177:web:002e6538d03204d6d8a4b8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
