import React, { useState } from 'react';
import firebase from 'firebase';
import TextInput from "react-native-web/dist/exports/TextInput";

var firebaseConfig = {
  apiKey: "AIzaSyB7BA-TlapWQCk86aUgv5RFEMOIlNIM7G4",
  authDomain: "crypto-react-native-new.firebaseapp.com",
  databaseURL: "https://crypto-react-native-new.firebaseio.com",
  projectId: "crypto-react-native-new",
  storageBucket: "crypto-react-native-new.appspot.com",
  messagingSenderId: "1005128051245",
  appId: "1:1005128051245:web:86a57e7b2034d66daf66a4",
  measurementId: "G-LFTG1VVZCP"
};

// Initialize Firebase
const  app = firebase.initializeApp(firebaseConfig);
export const Stripe = () => {
  const [login, setLogin] = useState()
  const [logout, setLogout] = useState()
  const [test, setTest] = useState()
  var features = ["auth", "functions"].filter(function(feature) {
    return typeof app[feature] === "function";
  });
  console.log("Firebase SDK loaded with ".concat(features.join(", "))); // Firebase Services

  var fun = firebase.functions();
  var auth = firebase.auth();
// auth.app.options.uid
  auth.onAuthStateChanged(function(user) {
    if (user) {
     (console.log());
    } else {
      return 'error'
    }
  }); // Event Handlers

  const handlelogin = function() {
    return auth.signInAnonymously();
  };
  const handlelogout = function() {
    return auth.signOut();
  };

  const testFun = fun.httpsCallable('testFunction');
  // const testFunButton = document.getElementById('testFunButton');
  const handleTest = async function () {
    const response = await testFun({ message: 'Howdy!' });
    console.log(response);
  }

  return (
    <div>
      <button onClick={() => {handlelogin()}}>Login</button>
      <button onClick={() => {handlelogout()}}> Logout </button>
      <button onClick={() => {handleTest()}}>Test Callable Function</button>
    </div>
  )

}
