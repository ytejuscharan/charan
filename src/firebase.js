// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEfe1aDoXiGHSZhG_FlcCq79UVoOeka8Q",
  authDomain: "insuatrialteam.firebaseapp.com",
  projectId: "insuatrialteam",
  storageBucket: "insuatrialteam.appspot.com",
  messagingSenderId: "999463291642",
  appId: "1:999463291642:web:1a686882d987dba8501743",
  measurementId: "G-4JX0BR0BNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);