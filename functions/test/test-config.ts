import * as TestFunctions from 'firebase-functions-test';

const firebaseConfig = {
    databaseURL: "https://crypto-react-native-new.firebaseio.com",
    projectId: "crypto-react-native-new",
    storageBucket: "crypto-react-native-new.appspot.com"
}

const envConfig = { stripe: { secret: 'sk_test_ARheZyTVUBvISYKLeENdPaXg000YUHloSf' }};

const fun = TestFunctions(firebaseConfig, 'service-account.json')

fun.mockConfig(envConfig);

export { fun };
