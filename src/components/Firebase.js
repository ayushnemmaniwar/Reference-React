import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyB4Xopx-EoarYTszBs_DISwXfvSgaTRwv4",
    authDomain: "signin-d888d.firebaseapp.com",
    projectId: "signin-d888d",
    storageBucket: "signin-d888d.appspot.com",
    messagingSenderId: "107455009888",
    appId: "1:107455009888:web:55851e8d823c33e6c1df05"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const db=firebase.firestore();
  export {
      auth,firebase,db
  }