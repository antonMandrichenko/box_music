import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  BackHandler,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "../config/firebase";
import AppContext from "../context/AppContext";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState("");
  const { user } = React.useContext(AppContext);
  const handleAndroidBackButton = () => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      props.navigation.navigate("Login");
      return true;
    });
  };
  const removeAndroidBackButtonHandler = () => {
    BackHandler.removeEventListener("hardwareBackPress", () => {});
  };
  useEffect(() => {
    handleAndroidBackButton();
  }, []);
  useEffect(() => {
    return () => removeAndroidBackButtonHandler();
  });

  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            props.navigation.navigate("ChooseChannel");
          }
          return false;
        })
      )
        // .then(
        //       firebase
        //         .database()
        //         .ref("likes")
        //         .child(user.slice(0, user.indexOf(".")))
        //           .once("value", snap => {
        //             if (snap.val() === null) {
        //                 console.log(snap.val())
        //                 console.log("snap")
        //               }else {
        //               console.log('elseSnap')
        //             }})
        // )
      // .then(
      //   firebase
      //     .database()
      //     .ref("users/images/")
      //     .child(user)
      //     .update({
      //       authorName: user
      //     })
      // )
      // .then(
      //   firebase
      //     .database()
      //     .ref("users/comments/")
      //     .child(user.slice(0, user.indexOf(".")))
      //     .update({
      //       review: null,
      //       authorName: user.slice(0, user.indexOf("."))
      //     })
      // )
      .catch(error => {
        const errorCode = error.message;
        setErrorState(errorCode);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={
            __DEV__
              ? require("../assets/images/background-login.jpg")
              : require("../assets/images/background-login.jpg")
          }
          style={styles.imageBackground}
        >
          <LinearGradient
            colors={[
              "rgba(151,232,243,1)",
              "rgba(50,149,182,1)",
              "rgba(204,63,223,1)",
              "rgba(255,127,136,1)"
            ]}
            style={styles.circle}
            locations={[0, 0.2, 0.8, 1]}
          >
            <View style={styles.circleInner}>
              <Image
                source={
                  __DEV__
                    ? require("../assets/images/vybn.png")
                    : require("../assets/images/vybn.png")
                }
                style={styles.circleInnerImage}
              />
            </View>
          </LinearGradient>
          <Text style={styles.login}> login </Text>
          <View style={styles.blackLine} />
          <LinearGradient
            colors={["#08080a", "#1d1e25"]}
            style={styles.inputWrapper}
            locations={[0.05, 1]}
          >
            <ImageBackground
              source={
                __DEV__
                  ? require("../assets/images/icons/email.png")
                  : require("../assets/images/icons/email.png")
              }
              style={styles.emailIcon}
            />
            <View style={styles.line} />
            <TextInput
              style={styles.input}
              onChangeText={input => setEmail(input)}
              value={email}
              placeholder="Enter your email"
              placeholderTextColor="#abaed0"
            />
          </LinearGradient>
          <LinearGradient
            colors={["#08080a", "#1d1e25"]}
            style={styles.inputWrapper}
            locations={[0.05, 1]}
          >
            <ImageBackground
              source={
                __DEV__
                  ? require("../assets/images/icons/password.png")
                  : require("../assets/images/icons/password.png")
              }
              style={styles.passwordIcon}
            />
            <View style={styles.line} />
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={input => setPassword(input)}
              value={password}
              placeholder="Enter password"
              placeholderTextColor="#abaed0"
            />
          </LinearGradient>
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => props.navigation.navigate("ForgotPasswordConfirm")}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text style={styles.error}>{errorState}</Text>
          <TouchableOpacity onPress={() => signIn()}>
            <LinearGradient
              style={styles.button}
              colors={["#373843", "#2e2f39", "#24252d"]}
              locations={[0.3, 0.5, 0.8]}
            >
              <Text style={styles.text}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.socialWrapper}>
            <TouchableOpacity onPress={() => setSignupFacebook()}>
              <LinearGradient
                style={styles.facebook}
                colors={["#373843", "#2e2f39", "#24252d"]}
                locations={[0.3, 0.5, 0.8]}
              >
                <ImageBackground
                  source={
                    __DEV__
                      ? require("../assets/images/icons/facebook.png")
                      : require("../assets/images/icons/facebook.png")
                  }
                  style={styles.facebookBaseline}
                />
                <View style={styles.line} />
                <Text style={styles.text}>Facebook</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSignupGoogle()}>
              <LinearGradient
                style={styles.google}
                colors={["#373843", "#2e2f39", "#24252d"]}
                locations={[0.3, 0.5, 0.8]}
              >
                <ImageBackground
                  source={
                    __DEV__
                      ? require("../assets/images/icons/google.png")
                      : require("../assets/images/icons/google.png")
                  }
                  style={styles.googleBaseline}
                />
                <View style={styles.line} />

                <Text style={styles.text}>Google</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.blackLine} />
          <View style={styles.accountWrapper}>
            <Text style={styles.account}>Don't have an account</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("EmailConfirmation")}
            >
              <Text style={styles.signUp}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  circle: {
    width: 185,
    height: 185,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-45deg" }],
    marginTop: 40
  },
  circleInner: {
    width: 175,
    height: 175,
    borderRadius: 100,
    backgroundColor: "#292930",
    alignItems: "center",
    justifyContent: "center"
  },
  circleInnerImage: {
    transform: [{ rotate: "45deg" }]
  },
  login: {
    color: "#abaed0",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 35,
    marginBottom: 20,
    borderRadius: 5
  },
  blackLine: {
    width: 23,
    height: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#08080a",
    borderColor: "#202024",
    borderRadius: 3,
    marginBottom: 18
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e",
    height: 39,
    width: 302
  },
  emailIcon: {
    width: 32,
    height: 26,
    marginRight: 12
  },
  line: {
    height: 13,
    width: 1,
    backgroundColor: "#abaed0",
    marginRight: 12
  },
  forgotPassword: {
    marginLeft: 190
  },
  forgotPasswordText: {
    color: "#abaed0",
    marginBottom: 5
  },
  error: {
    color: "red",
    height: 30,
    width: 302,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    height: 39,
    width: 302,
    marginBottom: 9,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e"
  },
  socialWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20
  },
  facebook: {
    height: 39,
    width: 148,
    marginBottom: 9,
    marginRight: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 4,
    borderWidth: 1,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e"
  },
  facebookBaseline: {
    width: 7,
    height: 13,
    marginRight: 12
  },
  google: {
    height: 39,
    width: 148,
    marginBottom: 9,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 4,
    borderWidth: 1,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e"
  },
  googleBaseline: {
    width: 14,
    height: 14,
    marginRight: 15
  },
  accountWrapper: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 35
  },
  account: {
    marginRight: 5,
    color: "#abaed0"
  },
  signUp: {
    color: "#4c4cda"
  },
  passwordIcon: {
    width: 32,
    height: 26,
    marginRight: 12
  },
  input: {
    borderWidth: 0,
    height: 39,
    width: 302,
    color: "#abaed0"
  },
  text: {
    color: "#abaed0",
    textShadowColor: "#272730",
    textShadowOffset: { width: 1, height: 2 },
    fontSize: 12
  }
});

export default Login;
