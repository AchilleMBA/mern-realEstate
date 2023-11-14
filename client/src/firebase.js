// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3dce3.firebaseapp.com",
  projectId: "mern-estate-3dce3",
  storageBucket: "mern-estate-3dce3.appspot.com",
  messagingSenderId: "1056011787659",
  appId: "1:1056011787659:web:f0d867b2cdef9eb177238e",
  measurementId: "G-RHQCEV96Z3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
