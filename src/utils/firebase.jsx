// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8QUh-HdQHgT5TNWZ-62DHn0SD9TH8VQU",
  authDomain: "netflixgpt-d74f8.firebaseapp.com",
  projectId: "netflixgpt-d74f8",
  storageBucket: "netflixgpt-d74f8.firebasestorage.app",
  messagingSenderId: "432313704568",
  appId: "1:432313704568:web:aebbbead5a2e632d5f8d8d",
  measurementId: "G-B7CSJ5VFDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
 const analytics = getAnalytics(app);
 
export const auth= getAuth();