import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyCc9XfdpmQfUbEHQOXc8VkuuqUlAmJlVFs",
  authDomain: "mirec--clone.firebaseapp.com",
  databaseURL: "https://mirec--clone.firebaseio.com",
  projectId: "mirec--clone",
  storageBucket: "mirec--clone.appspot.com",
  messagingSenderId: "1065373775022",
  appId: "1:1065373775022:web:ac770594dc80a4961ee93f",
  measurementId: "G-5PLG5FQFM5",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
