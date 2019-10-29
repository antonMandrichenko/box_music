import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Button
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const propTypes = {};

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("Login");

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
                    style={{
                      width: 120,
                      height: 140,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                />
              </View>
              <View>

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
                    placeholder="Enter your emailWeb"
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
              <Text
                  style={{
                    color: "#abaed0",
                    width: 302,
                    textAlign: "right",
                    marginBottom: 25
                  }}
                    onPress={() => Linking.openURL("#")}>
                Forgot Password?
              </Text>
              <LinearGradient
                  style={styles.buttonLogin}
                  colors={["#373843", "#2e2f39", "#24252d"]}
                  locations={[0.3, 0.5, 0.8]}
              >

                  <Text
                      style={{
                        color: "#abaed0",
                        textShadowColor: "#272730",
                        textShadowOffset: {width: -1, height: -1},
                      }}
                  >
                    Login
                  </Text>
              </LinearGradient>
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
  circle: {
    width: 185,
    height: 185,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  circleInner: {
    width: 175,
    height: 175,
    borderRadius: 100,
    backgroundColor: "#292930",
    alignItems: "center",
    justifyContent: "center"
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundPosition: "center",
    paddingTop: 69
  },
  login: {
    color: "#abaed0",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 52,
    borderRadius: 5,
  },
  blackLine: {
    width: 23,
    height: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#08080a",
    borderColor: "#202024",
    borderRadius: 3,
    marginTop: 32,
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
    boxSizing: "border-box",
    color: "#abaed0",
    outlineColor: "transparent"
  },
  buttonLogin: {
    height: 39,
    width: 302,
    marginBottom: 9,
    borderWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outlineColor: "transparent",
  }
});

Login.propTypes = propTypes;

export default Login;
