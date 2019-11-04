import firebase from 'firebase';
// Your web app's Firebase configuration
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
const  initialize = firebase.initializeApp(firebaseConfig);
export default initialize;
