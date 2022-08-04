import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtpEDT8dvXmV30I-nyp8wlRPCVe4VrAmI",
    authDomain: "purrfect-pals.firebaseapp.com",
    databaseURL: "https://purrfect-pals-default-rtdb.firebaseio.com",
    projectId: "purrfect-pals",
    storageBucket: "purrfect-pals.appspot.com",
    messagingSenderId: "571025265245",
    appId: "1:571025265245:web:b875dee61abc39af01f3b4"
};

initializeApp(firebaseConfig);
export const database = getFirestore();