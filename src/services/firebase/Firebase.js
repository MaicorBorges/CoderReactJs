
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBGWeXDYiMkCptpTkjm8WnJXZamhIH_mHQ",
  authDomain: "e-commerce-caf98.firebaseapp.com",
  projectId: "e-commerce-caf98",
  storageBucket: "e-commerce-caf98.appspot.com",
  messagingSenderId: "233854794663",
  appId: "1:233854794663:web:46a508444b5f4d88c7d482"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 