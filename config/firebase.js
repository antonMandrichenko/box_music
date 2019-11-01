import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB7BA-TlapWQCk86aUgv5RFEMOIlNIM7G4",
  authDomain: "crypto-react-native-new.firebaseapp.com",
  databaseURL: "https://crypto-react-native-new.firebaseio.com",
  projectId: "crypto-react-native-new",
  storageBucket: "crypto-react-native-new.appspot.com",
  messagingSenderId: "sk_test_ARheZyTVUBvISYKLeENdPaXg000YUHloSf",
  appId: "1:1005128051245:web:8e99a391d79044b9af66a4",
  measurementId: "G-WVXT5WV9H2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
