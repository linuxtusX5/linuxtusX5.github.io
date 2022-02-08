import firebase from "firebase/compat/app";
import "firebase/compat/storage";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD19Bryc4YrYuu7JtsKCGutxu_wm3cQJKs",
  authDomain: "fir-event-5ebec.firebaseapp.com",
  databaseURL: "gs://fir-event-5ebec.appspot.com",
  projectId: "fir-event-5ebec",
  storageBucket: "fir-event-5ebec.appspot.com",
  messagingSenderId: "150917764131",
  appId: "1:150917764131:web:80cccc8b315cc509e50d96",
  measurementId: "G-RX97DX58KP"
};


firebase.initializeApp(firebaseConfig);

//for storage
const storage = firebase.storage();
export { storage, firebase as default };

//for email
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);