// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOGtZpmU-0NlCs1YG736h5g5ZJ21FmYTg",
  authDomain: "react-proyecto-fuwafuwa-0609.firebaseapp.com",
  projectId: "react-proyecto-fuwafuwa-0609",
  storageBucket: "react-proyecto-fuwafuwa-0609.firebasestorage.app",
  messagingSenderId: "102954783468",
  appId: "1:102954783468:web:20a7085f25d385dccb0bc9",
  measurementId: "G-8DSWRY0K81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
