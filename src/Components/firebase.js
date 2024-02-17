// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuGqwkxb5HS-DUThplWbziQiTxOB9tyuE",
  authDomain: "scent-plug.firebaseapp.com",
  projectId: "scent-plug",
  storageBucket: "scent-plug.appspot.com",
  messagingSenderId: "1018092838344",
  appId: "1:1018092838344:web:ace38c51996001c2dd34fd",
  measurementId: "G-E8NWWTKH00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, database }