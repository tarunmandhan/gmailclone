import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqscwhL8vibdhdCHW2_31ZlXo5swrBMBM",
  authDomain: "tarunmandhan-clone.firebaseapp.com",
  projectId: "tarunmandhan-clone",
  storageBucket: "tarunmandhan-clone.appspot.com",
  messagingSenderId: "335785646871",
  appId: "1:335785646871:web:c90041d32743b5ebb2f552",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firebase();

export{ db }