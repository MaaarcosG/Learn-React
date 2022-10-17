// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyATSCyKGlZX5SeEFgBKtdoLc0dhAg1J87c",
  authDomain: "react-learn-fe6de.firebaseapp.com",
  projectId: "react-learn-fe6de",
  storageBucket: "react-learn-fe6de.appspot.com",
  messagingSenderId: "969803428606",
  appId: "1:969803428606:web:ef996d919bbbdae33babaf",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);   /* autenticacion para la base de datos */
export const FirebaseDB = getFirestore(FirebaseApp) /* guardar la informacion */

