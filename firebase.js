import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMMH9yYMotVaqKNz327PTarSKXWhCDnAw",
  authDomain: "popcorn-night.firebaseapp.com",
  projectId: "popcorn-night",
  storageBucket: "popcorn-night.appspot.com",
  messagingSenderId: "847624605600",
  appId: "1:847624605600:web:ce81c0f1b90abff5255ec5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
