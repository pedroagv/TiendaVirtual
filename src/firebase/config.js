// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUe2Olt1Vg56ppEFpHqg3vDCYaS1e6PY4",
  authDomain: "prueba-d89fe.firebaseapp.com",
  projectId: "prueba-d89fe",
  storageBucket: "prueba-d89fe.appspot.com",
  messagingSenderId: "448061491362",
  appId: "1:448061491362:web:61e2c90b6d8846aefb2ffb",
  measurementId: "G-WN5V5CRX1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);