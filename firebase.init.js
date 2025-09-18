// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYBGytjb2IVjPmZqmdwDUz9CMXasgbV58",
  authDomain: "ranna-ghor-7580.firebaseapp.com",
  projectId: "ranna-ghor-7580",
  storageBucket: "ranna-ghor-7580.firebasestorage.app",
  messagingSenderId: "927520043948",
  appId: "1:927520043948:web:1e49ae10988b803dbb8009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);