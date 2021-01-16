import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDR4-WSRZZgRlqLJ15CmAxZEdPhqKbY2AE",
  authDomain: "react-grupa-3.firebaseapp.com",
  projectId: "react-grupa-3",
  storageBucket: "react-grupa-3.appspot.com",
  messagingSenderId: "894799243331",
  appId: "1:894799243331:web:d8070229ad6d9aea638cf6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
export default db;
