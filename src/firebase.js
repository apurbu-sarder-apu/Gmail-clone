import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHZVk3zouA-kWVWjiKIVTWaBcc94YlJfI",
    authDomain: "clone-6cdab.firebaseapp.com",
    projectId: "clone-6cdab",
    storageBucket: "clone-6cdab.appspot.com",
    messagingSenderId: "831534772560",
    appId: "1:831534772560:web:15aceb1ab630d1dd183c55"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };