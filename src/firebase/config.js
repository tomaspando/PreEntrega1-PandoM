// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrHrg9W7okf8MqOirD8usZjG-Yfi4YI1c",
  authDomain: "tienda-rf.firebaseapp.com",
  projectId: "tienda-rf",
  storageBucket: "tienda-rf.appspot.com",
  messagingSenderId: "1092155728527",
  appId: "1:1092155728527:web:6e6468b2607ac2594986fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)