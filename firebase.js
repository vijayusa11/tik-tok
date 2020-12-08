// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAVFAmvKoh_cLYRADQd_tXR3EzNsZmiOw",
  authDomain: "tik-tok-60b69.firebaseapp.com",
  projectId: "tik-tok-60b69",
  storageBucket: "tik-tok-60b69.appspot.com",
  messagingSenderId: "785699856795",
  appId: "1:785699856795:web:2f3bec28decf3b24c1c13e",
  measurementId: "G-H6MNKNT4NB"
});

const db = firebaseApp.firestore();

export default db;