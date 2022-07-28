import firebase from "firebase/app";
import 'firebase/firestore' 
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBThyvWx-cSmYJFQgJyhzVydOOoebZhpMA",
    authDomain: "expensify-79d5b.firebaseapp.com",
    projectId: "expensify-79d5b",
    storageBucket: "expensify-79d5b.appspot.com",
    messagingSenderId: "636196818140",
    appId: "1:636196818140:web:ea7fba94a5e925ffcb3819"
  };


//   ===INIT FIREBASE===
firebase.initializeApp(firebaseConfig)

// ===INIT SERVICES===
const projectFirestore =firebase.firestore()
const projectAuth =firebase.auth()
const timestamp = firebase.firestore.Timestamp
export{ projectFirestore, projectAuth, timestamp}