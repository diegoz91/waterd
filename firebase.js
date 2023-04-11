// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOZZVdTJnNWZ41dQ-22IXNwQDE7tPk05w",
  authDomain: "watered-867b5.firebaseapp.com",
  projectId: "watered-867b5",
  storageBucket: "watered-867b5.appspot.com",
  messagingSenderId: "705572222561",
  appId: "1:705572222561:web:7833bd07fc459877c6dc20"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };