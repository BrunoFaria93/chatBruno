import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgFc3DzzkdndBTK-haJrxbW-c1vNmbNTc",
  authDomain: "chatbruno-ca5de.firebaseapp.com",
  projectId: "chatbruno-ca5de",
  storageBucket: "chatbruno-ca5de.appspot.com",
  messagingSenderId: "1092223517035",
  appId: "1:1092223517035:web:ba71a2aa271eed34530c2e",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
