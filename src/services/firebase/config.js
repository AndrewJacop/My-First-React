// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCspjWdEMJg7Ekjidj_MIzO2yy1j-LL-T0",
  authDomain: "frontend2024-9ebcb.firebaseapp.com",
  databaseURL: "https://frontend2024-9ebcb-default-rtdb.firebaseio.com",
  projectId: "frontend2024-9ebcb",
  storageBucket: "frontend2024-9ebcb.appspot.com",
  messagingSenderId: "505821804638",
  appId: "1:505821804638:web:d034a2bd47635fc4129ccf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
