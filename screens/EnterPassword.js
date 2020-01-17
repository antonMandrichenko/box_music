import React, { useContext } from "react";
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
import AppContext from "../context/AppContext";

const EnterPassword = (props) => {
  const {
    nav,
    password,
    passwordConfirm,
    handleChangePassword,
    handleChangeConfirmPassword,
    signUp,
    error
  } = useContext(AppContext);

  const authClient = async e => {
    await signUp(e);
    await nav(props, "Login");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          __DEV__
            ? require("../assets/images/emailconfirm-background.jpg")
            : require("../assets/images/emailconfirm-background.jpg")
        }
        style={styles.imageBackground}
      >
        <Text
          style={{
            color: "#fff",
            textTransform: "uppercase",
            textAlign: "center",
            paddingTop: 45,
            paddingBottom: 35,
            fontSize: 21
          }}
        >
          let's finish this.
        </Text>
        <Image
          source={
            __DEV__
              ? require("../assets/images/icons/key-confirm.png")
              : require("../assets/images/icons/key-confirm.png")
          }
          style={{
            width: 155,
            height: 155
          }}
        />
        <Text
          style={{
            color: "#abaed0",
            textTransform: "uppercase",
            textAlign: "center",
            paddingTop: 48,
            paddingBottom: 28,
            fontSize: 21,
            fontWeight: "700"
          }}
        >
          create your password
        </Text>
        <View style={styles.blackLine} />
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
            style={{
              width: 52,
              height: 40,
              marginRight: 6
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
            onChangeText={e => handleChangePassword(e)}
            value={password}
            placeholder="Enter password"
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
            style={{
              width: 52,
              height: 40,
              marginRight: 6
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
            onChangeText={e => handleChangeConfirmPassword(e)}
            value={passwordConfirm}
            placeholder="Confirm password"
            placeholderTextColor="#abaed0"
          />
        </LinearGradient>
        <Text
          style={{
            width: 285,
            textAlign: "center",
            color: "#abaed0",
            paddingTop: 5,
            marginBottom: 35
          }}
        >
          Make sure that! The passwords you entered are the same in both fields
        </Text>
        <Text style={{ color: "red", height: 15 }}>{error}</Text>

        <View style={styles.blackLine} />
        <TouchableOpacity onPress={authClient}>
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
            <Text style={styles.text}>Start My Adventure</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 35
          }}
        />
      </ImageBackground>
    </View>
  );
}

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
    height: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#08080a",
    borderColor: "#202024",
    borderRadius: 3,
    marginBottom: 20
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
  input: {
    borderWidth: 0,
    height: 39,
    width: 302,
    color: "#abaed0"
  },
  buttonLogin: {
    height: 39,
    width: 302,
    marginBottom: 9,
    borderWidth: 0,
    textAlign: "center",
    color: "#abaed0",
    textShadowColor: "#272730",
    textShadowOffset: { width: -1, height: -1 }
  },
  text: {
    color: "#abaed0",
    textShadowColor: "#272730",
    textShadowOffset: { width: 1, height: 2 },
    fontSize: 12
  }
});

export default EnterPassword;
