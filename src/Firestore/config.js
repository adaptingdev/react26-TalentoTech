import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCN8dX1dqEbLib20E6gk4YcN-bIY1zc_wg",
  authDomain: "curso-react-2026-f156a.firebaseapp.com",
  projectId: "curso-react-2026-f156a",
  storageBucket: "curso-react-2026-f156a.firebasestorage.app",
  messagingSenderId: "786952392006",
  appId: "1:786952392006:web:d82ee46c20d007b26ee947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);