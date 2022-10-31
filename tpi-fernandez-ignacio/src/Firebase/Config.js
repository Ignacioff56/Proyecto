// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA88Mp5VJUJK8DSikuHEWvQ6wldssxUunQ",
  authDomain: "tpi-react-ignacio.firebaseapp.com",
  projectId: "tpi-react-ignacio",
  storageBucket: "tpi-react-ignacio.appspot.com",
  messagingSenderId: "1055180866981",
  appId: "1:1055180866981:web:36211f173d81f8473f544c",
  measurementId: "G-VY5YXS3HVX",
};

// Initialize Firebase
initializeApp(firebaseConfig);
