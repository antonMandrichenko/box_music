import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const EmailConfirm = props => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      <ImageBackground
        source={
          __DEV__
            ? require("../assets/images/emailconfirm-background.jpg")
            : require("../assets/images/emailconfirm-background.jpg")
        }
        style={styles.imageBackground}
      >
        <Text style={styles.textTitle}>just a more step</Text>
        <Image
          source={
            __DEV__
              ? require("../assets/images/icons/email-copy.png")
              : require("../assets/images/icons/email-copy.png")
          }
          style={styles.emailIcon}
        />
        <Text style={styles.textMain}>congratulation</Text>
        <View style={styles.blackLine} />
        <Text style={styles.textAdditional}>
          Your Account has successfully registered. To complete the process
          please check your email for a validation request
        </Text>
        <View style={styles.blackLine} />
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ForgotPassword")}
        >
          <LinearGradient
            style={styles.button}
            colors={["#373843", "#2e2f39", "#24252d"]}
            locations={[0.3, 0.5, 0.8]}
          >
            <Text style={styles.text}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.imageLiner} />
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
  textTitle: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: 45,
    paddingBottom: 75,
    fontSize: 21
  },
  emailIcon: {
    width: 135,
    height: 100
  },
  textMain: {
    color: "#abaed0",
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: 48,
    paddingBottom: 28,
    fontSize: 21,
    fontWeight: "700"
  },
  textAdditional: {
    width: 285,
    textAlign: "center",
    color: "#abaed0",
    paddingTop: 5,
    marginBottom: 90
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
  text: {
    color: "#abaed0",
    textShadowColor: "#272730",
    textShadowOffset: { width: 1, height: 2 },
    fontSize: 12
  },
  imageLine: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 35
  }
});

export default EmailConfirm;
