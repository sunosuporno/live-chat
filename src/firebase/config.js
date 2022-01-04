import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDA2QQ_cHF2wYDT9GLfgx8v0PHnBK65C7Q",
    authDomain: "udemy-vue-firebase-sites-7d2b1.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-7d2b1",
    storageBucket: "udemy-vue-firebase-sites-7d2b1.appspot.com",
    messagingSenderId: "579776760361",
    appId: "1:579776760361:web:3b8d02697b94377138ea38"
  };

  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, timestamp, projectAuth };