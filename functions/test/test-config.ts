import * as TestFunctions from 'firebase-functions-test';

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
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const envConfig = { stripe: { secret: 'sk_test_ARheZyTVUBvISYKLeENdPaXg000YUHloSf' }};

const fun = TestFunctions(firebaseConfig, 'service-account.json')

fun.mockConfig(envConfig);

export { fun };

