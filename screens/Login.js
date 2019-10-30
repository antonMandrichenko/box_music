import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "../config/firebase";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, loginAction } from '../actions/user'

const propTypes = {};

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [login, setLogin] = useState(false);
  const [signupFacebook, setSignupFacebook] = useState(false);
  const [signupGoogle, setSignupGoogle] = useState(false);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    setLogin(loginAction)
  }, []);

  return (
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
              locations={[0.05,1]}
          >
            <ImageBackground
                source={
                  __DEV__
                      ? require("../assets/images/icons/email.png")
                      : require("../assets/images/icons/email.png")
                }
                style={{
                  width: 32,
                  height: 26,
                  marginRight: 12,
                }}
            />
            <View
                style={{
                  height: 13,
                  width: 1,
                  backgroundColor: "#abaed0",
                  marginRight: 12
                }}
            >
            </View>
            <TextInput
                style={styles.input}
                onChangeText={email => setEmail(email)}
                value={email}
                placeholder="Enter your email"
                placeholderTextColor="#abaed0"
            />
          </LinearGradient>
          <LinearGradient
              colors={["#08080a", "#1d1e25"]}
              style={styles.inputWrapper}
              locations={[0.05,1]}
          >
            <ImageBackground
                source={
                  __DEV__
                      ? require("../assets/images/icons/password.png")
                      : require("../assets/images/icons/password.png")
                }
                style={{
                  width: 32,
                  height: 26,
                  marginRight: 12,
                }}
            />
            <View
                style={{
                  height: 13,
                  width: 1,
                  backgroundColor: "#abaed0",
                  marginRight: 12
                }}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={password => setPassword(password)}
                value={password}
                placeholder="Enter password"
                placeholderTextColor="#abaed0"
            />
          </LinearGradient>
          <TouchableOpacity
              onPress={() => setForgotPassword()}>
            <Text
                style={{
                  color: "#abaed0",
                  width: 302,
                  textAlign: "right",
                  marginBottom: 20
                }}
            >Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => setLogin(
                  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                    alert(error)
                  })
              )}
          >
            <LinearGradient
                style={{
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
                }}
                colors={["#373843", "#2e2f39", "#24252d"]}
                locations={[0.3, 0.5, 0.8]}
            >
              <Text  style={styles.text}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginBottom: 20,
          }}>
            <TouchableOpacity
                onPress={() => setSignupFacebook()}
            >
              <LinearGradient
                  style={{
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
                  }}
                  colors={["#373843", "#2e2f39", "#24252d"]}
                  locations={[0.3, 0.5, 0.8]}
              >
                <ImageBackground
                    source={
                      __DEV__
                          ? require("../assets/images/icons/facebook.png")
                          : require("../assets/images/icons/facebook.png")
                    }
                    style={{
                      width: 7,
                      height: 13,
                      marginRight: 12,
                    }}
                />
                <View
                    style={{
                      height: 13,
                      width: 1,
                      backgroundColor: "#abaed0",
                      marginRight: 12
                    }}
                />
                <Text style={styles.text}>Facebook</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setSignupGoogle()}
            >
              <LinearGradient
                  style={{
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
                  }}
                  colors={["#373843", "#2e2f39", "#24252d"]}
                  locations={[0.3, 0.5, 0.8]}
              >
                <ImageBackground
                    source={
                      __DEV__
                          ? require("../assets/images/icons/google.png")
                          : require("../assets/images/icons/google.png")
                    }
                    style={{
                      width: 14,
                      height: 14,
                      marginRight: 15,
                    }}
                />
                <View
                    style={{
                      height: 13,
                      width: 1,
                      backgroundColor: "#abaed0",
                      marginRight: 12
                    }}
                />

                  <Text style={styles.text}>Google</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.blackLine} />
          <View style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 35
          }}>
            <Text style={{
              marginRight: 5,
              color: "#abaed0"
            }}>Don't have an account</Text>
            <TouchableOpacity
              onPress={() => console.log('press')}
            >
              <Text
                  style={{
                    color: "#4c4cda"
                  }}
              >Sign up</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    width: 120,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "45deg" }],
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
    width: 302,
  },
  input: {
    borderWidth: 0,
    height: 39,
    width: 302,
    color: "#abaed0",
  },
  buttonLogin: {
    height: 39,
    width: 302,
    marginBottom: 9,
    borderWidth: 0,
    textAlign: "center",
    color: "#abaed0",
    textShadowColor: "#272730",
    textShadowOffset: {width: -1, height: -1},
  },
  text: {
    color: "#abaed0",
    textShadowColor: "#272730",
    textShadowOffset: {width: 1, height: 2},
    fontSize: 12
  }
});

Login.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
