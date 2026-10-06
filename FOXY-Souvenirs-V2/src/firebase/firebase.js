import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBPkGitc0hhGUxj3B4zmba0M2fxMMAjmAw",
    authDomain: "foxy-souvenirs-6a969.firebaseapp.com",
    projectId: "foxy-souvenirs-6a969",
    storageBucket: "foxy-souvenirs-6a969.firebasestorage.app",
    messagingSenderId: "300667789931",
    appId: "1:300667789931:web:b185163d3367385c9b872e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };