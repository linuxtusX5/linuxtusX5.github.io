import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import { initializeApp } from "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdg4s_Qg_MXSgT113sAf3CVj_bgyOUipE",
  authDomain: "caps-v2.firebaseapp.com",
  databaseURL:
    "https://caps-v2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "caps-v2",
  storageBucket: "caps-v2.appspot.com",
  messagingSenderId: "631824736699",
  appId: "1:631824736699:web:ff4eda1a5d40bf43b2a49e",
  measurementId: "G-14WL0K6YBF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
export const db = firebaseApp.firestore();

//for storage
const storage = firebase.storage();
export { storage, firebase as default };

//for email
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);