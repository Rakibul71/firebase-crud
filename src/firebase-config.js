import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA-707Fyf4nh3GvnA4fIWEisk28YI9N0FU",
    authDomain: "react-authentication-tes-4d03b.firebaseapp.com",
    projectId: "react-authentication-tes-4d03b",
    storageBucket: "react-authentication-tes-4d03b.appspot.com",
    messagingSenderId: "361036763442",
    appId: "1:361036763442:web:f8c50f4fa486668eb6072b",
    measurementId: "G-SB02QMH6LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);