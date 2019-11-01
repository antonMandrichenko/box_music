import React, { useState, useEffect } from 'react';
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB7BA-TlapWQCk86aUgv5RFEMOIlNIM7G4",
  authDomain: "crypto-react-native-new.firebaseapp.com",
  databaseURL: "https://crypto-react-native-new.firebaseio.com",
  projectId: "crypto-react-native-new",
  storageBucket: "crypto-react-native-new.appspot.com",
  messagingSenderId: "1005128051245",
  appId: "1:1005128051245:web:8e99a391d79044b9af66a4",
  measurementId: "G-WVXT5WV9H2"
};

export const Stripe = () => {
  const [login, setLogin] = useState('');
  const [logout, setLogout] = useState('');
  const [profile, setProfile] = useState('');
  let app = firebase.app();
  let features = ['auth', 'functions'].filter(
      feature => typeof app[feature] === 'function'
  );
  console.log(`Firebase SDK loaded with ${features.join(', ')}`);

  // Firebase Services
  const fun = firebase.functions();
  const auth = firebase.auth();
  console.log(auth.app.options.apiKey);
  // Firebase Services
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      // setLogin(auth.uid)
    })
  }, [])


  // Event Handlers

  const handleLogin = () => setLogin(auth.signInAnonymously());
  const handleLogout = () => setLogout(auth.signOut());
  return (
  <div>
    <div></div>
  </div>

  )



  // Callable Functions
  const testFun = fun.httpsCallable('testFunction');
  const testFunButton = document.getElementById('testFunButton');

  document.getElementById('testFunButton').onclick = async () => {
    const response = await testFun({ message: 'Howdy!' });

    console.log(response);
  };
  // Initialize
  // let app = firebase.initializeApp(config);
  // let features = ['auth', 'functions'].filter(
  //     feature => typeof app[feature] === 'function'
  // );
  // console.log(`Firebase SDK loaded with ${features.join(', ')}`);
  //
  // // Firebase Services
  // const fun = firebase.functions();
  // const auth = firebase.auth();
  //
  // // DOM Elements
  // // const loginBtn = document.getElementById('login');
  // // const logoutBtn = document.getElementById('logout');
  // // const profile = document.getElementById('profile');
  //
  // // Realtime listener for Auth State
  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     console.log('login')
  //   }
  // });
  //
  // console.log(auth.onAuthStateChanged());
  //
  // const handleLogin = () => setLogin(auth.signInAnonymously());
  // const handleLogout = () => setLogout(auth.signOut());
  // return (
  //     <div>
  //       <button onClick={() => handleLogin()}>Login</button>
  //       <button onClick={() => handleLogout()}>Logout</button>
  //     </div>
  // )
  // const authUser = auth.onAuthStateChanged(user => {
  //
  //   if (user) {
  //     setLogin(user.uid);
  //   } else {
  //     // profile.innerHTML = 'not logged in';
  //   }
  //
  // });
  // return authUser;
  // Event Handlers
  //



  // Callable Functions
  // return 1;

}
