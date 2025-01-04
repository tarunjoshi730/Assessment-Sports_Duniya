import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCC0IJa4CO1Jkj1cVHYik4NjGEKzlCVi5o",
 authDomain: "project-dashboard-97b90.firebaseapp.com",
 projectId: "project-dashboard-97b90",
 storageBucket: "project-dashboard-97b90.firebasestorage.app",
 messagingSenderId: "41910588399",
 appId: "1:41910588399:web:19ed839be66d764f8e9c1a",
 measurementId: "G-7ZMC8RL0SY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);