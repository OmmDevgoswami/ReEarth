// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5YITc2sgxCHdc-333xXzNa_nRcewDDwg",
  authDomain: "upcycle-eec76.firebaseapp.com",
  databaseURL: "https://upcycle-eec76-default-rtdb.firebaseio.com",
  projectId: "upcycle-eec76",
  storageBucket: "upcycle-eec76.appspot.com",
  messagingSenderId: "942350325574",
  appId: "1:942350325574:web:24f6c430b823a3a38cb747",
  measurementId: "G-TKCPY06HDN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;