import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAJs9gyE7nw0fxm5QsyRhEjR9FajFyl2YY",
    // authDomain: "http://localhost:5173",
    authDomain: "socialmanagerxq.firebaseapp.com",
    projectId: "socialmanagerxq",
    storageBucket: "socialmanagerxq.appspot.com",
    messagingSenderId: "229939843106",
    appId: "1:229939843106:web:7381278e5e92cd1ae9ba7b",
    measurementId: "G-K3WPMET7BL"
};

// Debug: Log the Firebase configuration to ensure it's correct
console.log("Firebase configuration:", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app); // Debug: Check if Firebase app is initialized

// Initialize Analytics
const analytics = getAnalytics(app);
console.log("Firebase Analytics initialized:", analytics); // Debug: Check if Analytics is initialized

// Initialize Auth
const auth = getAuth(app);
console.log("Firebase Auth initialized:", auth); // Debug: Check if Auth is initialized

// Initialize Firestore
const firestore = getFirestore(app);
console.log("Firebase Firestore initialized:", firestore); // Debug: Check if Firestore is initialized

export { auth, firestore };
