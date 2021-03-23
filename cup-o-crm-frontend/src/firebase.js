import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCiRsUrueOcPChJPBVUkHXMfE8mxDYEHOw",
    authDomain: "cupocrm.firebaseapp.com",
    projectId: "cupocrm",
    storageBucket: "cupocrm.appspot.com",
    messagingSenderId: "372314356784",
    appId: "1:372314356784:web:99901b6774b75efa9b01f5",
    measurementId: "G-XZ8EVKCC02"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();