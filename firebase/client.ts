import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdx9uvc1Mjp5Ib6mByiVA-JJ1hb1kuXfw",
    authDomain: "qnai-950d7.firebaseapp.com",
    projectId: "qnai-950d7",
    storageBucket: "qnai-950d7.firebasestorage.app",
    messagingSenderId: "1083040016000",
    appId: "1:1083040016000:web:c578d96038c96f0a91e865",
    measurementId: "G-RCV25QG36V"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);