import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPGaEHCH_8Ka4lWj96KT5BtxPExewJfSY",
  authDomain: "foxy-souvenirs.firebaseapp.com",
  projectId: "foxy-souvenirs",
  storageBucket: "foxy-souvenirs.firebasestorage.app",
  messagingSenderId: "784630360710",
  appId: "1:784630360710:web:7f962d2748ab852c9c3f07"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };