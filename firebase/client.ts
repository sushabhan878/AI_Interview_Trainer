// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSJJGVE3o0ngXXIyDmC6X0aWHYGi2N9N8",
  authDomain: "prepwise-f1db7.firebaseapp.com",
  projectId: "prepwise-f1db7",
  storageBucket: "prepwise-f1db7.firebasestorage.app",
  messagingSenderId: "879918473700",
  appId: "1:879918473700:web:70450fcb8bb86fbc9767f1",
  measurementId: "G-Y7BMME07QG"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
// export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)