// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXTVK6qfbXezM9zQAiAe4kj8l9v6qRqwo",
  authDomain: "gen-lang-client-0703583468.firebaseapp.com",
  projectId: "gen-lang-client-0703583468",
  storageBucket: "gen-lang-client-0703583468.firebasestorage.app",
  messagingSenderId: "109637390605",
  appId: "1:109637390605:web:dc50833d0a66ce7e6be044",
  measurementId: "G-VQXVDRSRG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);