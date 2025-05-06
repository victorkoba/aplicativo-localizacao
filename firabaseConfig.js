// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdIfqgKJp3Sg74zdlj5fgAPPBN3VROOoE",
  authDomain: "api-maps-3b264.firebaseapp.com",
  projectId: "api-maps-3b264",
  storageBucket: "api-maps-3b264.firebasestorage.app",
  messagingSenderId: "859745975852",
  appId: "1:859745975852:web:dd4b94b5d87d18654d5b89",
  measurementId: "G-H924Y5889P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);