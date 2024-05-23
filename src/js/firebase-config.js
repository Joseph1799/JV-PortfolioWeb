// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5qERJ15Eq5tM3XOQPDhVr3oVxNJgzN4Q",
    authDomain: "fir-js-a2a04.firebaseapp.com",
    projectId: "fir-js-a2a04",
    storageBucket: "fir-js-a2a04.appspot.com",
    messagingSenderId: "198236302920",
    appId: "1:198236302920:web:06e29fa2d43733782c727d",
    measurementId: "G-114V1PF2FF",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
