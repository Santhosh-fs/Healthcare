import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpNtOwrnaPISc-ylksMQF2JIA9_TbMnTM",
  authDomain: "netflix-clone-71f29.firebaseapp.com",
  projectId: "netflix-clone-71f29",
  storageBucket: "netflix-clone-71f29.firebasestorage.app",
  messagingSenderId: "571413368498",
  appId: "1:571413368498:web:5e95fda3041fbdd7bf03ab",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
