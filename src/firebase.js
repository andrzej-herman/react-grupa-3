import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC3HqkNNDDy3uxZuaFH0trQLYPaHXZ46Do",
  authDomain: "react-grupa3.firebaseapp.com",
  projectId: "react-grupa3",
  storageBucket: "react-grupa3.appspot.com",
  messagingSenderId: "130267136631",
  appId: "1:130267136631:web:d8019f86dcf60f4af97c72",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
export default db;
