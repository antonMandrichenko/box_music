import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SmallButton from "../components/SmallButton";
import leftArrow from "../assets/images/iconsSvg/left-arrow.svg";
import AppContext from "../context/AppContext";
import { vw } from "react-native-expo-viewport-units";
import {freePlan} from "../constants/Layout";
import {upgradePlan} from "../constants/Layout";

const EditProfile = props => {
  const { goBack } = props.navigation;
  const handleBackButtonClick = () => {
    goBack(null);
  };

  const { switchPlan, toggleSwitchPlan } = React.useContext(AppContext);

  const darkColors = ["#373843", "#2e2f39"];
  const lightColors = ["#17165a", "#3736bc"];

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
        <View style={styles.textTitleWrapper}>
          <View style={styles.leftArrow}>
            <SmallButton path={leftArrow} onPress={handleBackButtonClick} />
          </View>
          <Text style={styles.textTitle}>Edit profile</Text>
        </View>
        <View style={styles.circleInnerImageWrapper}>
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
            <Image
              source={
                __DEV__
                  ? require("../assets/images/user.jpg")
                  : require("../assets/images/user.jpg")
              }
              style={styles.circleInnerImage}
            />
          </LinearGradient>
          <LinearGradient
            colors={[
              "rgba(151,232,243,1)",
              "rgba(50,149,182,1)",
              "rgba(204,63,223,1)",
              "rgba(255,127,136,1)"
            ]}
            style={styles.circleSmall}
            locations={[0, 0.2, 0.8, 1]}
          >
            <Image
              source={
                __DEV__
                  ? require("../assets/images/iconsSvg/user.svg")
                  : require("../assets/images/iconsSvg/user.svg")
              }
              style={styles.circleInnerImageSmall}
            />
          </LinearGradient>
        </View>

        <Text style={styles.login}>Adam Lambert</Text>
        <View style={styles.blackLine} />
        <View style={styles.containerBeforeSlider}>
          <Text style={styles.textAdditional}>• Subscription Plan •</Text>
        </View>
        <View style={styles.containerButtons}>
          <TouchableOpacity onPress={toggleSwitchPlan}>
            <LinearGradient
              style={styles.inputChannelButton}
              colors={switchPlan ? darkColors : lightColors}
              locations={[0.05, 1]}
            >
              <Text style={styles.buttonColor}>Free</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleSwitchPlan}>
            <LinearGradient
              style={styles.inputChannelButton}
              colors={switchPlan ? lightColors : darkColors}
              locations={[0.05, 1]}
            >
              <Text style={styles.buttonColor}>Upgraded</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.containerButtons}>
          <LinearGradient
            style={styles.list}
            colors={lightColors}
            locations={[0.05, 1]}
          >
            <View style={styles.planList}>
              <ImageBackground
                source={
                  __DEV__
                    ? require("../assets/images/iconsSvg/money.svg")
                    : require("../assets/images/iconsSvg/money.svg")
                }
                style={styles.moneyIcon}
              />
              <Text style={styles.textPrice}>{switchPlan ? 20 : 0}</Text>
            </View>
            <View style={styles.planList}>
              <FlatList
                contentContainerStyle={styles.containerPlanList}
                data={switchPlan ? upgradePlan : freePlan}
                renderItem={({ item }) => (
                  <Text style={styles.textList}>• {item.key}</Text>
                )}
              />
            </View>
          </LinearGradient>
        </View>
        {/*/////////////////////*/}

        <TouchableOpacity onPress={() => props.navigation.navigate('ChooseChannel')}>
          <LinearGradient
            style={styles.button}
            colors={["#373843", "#2e2f39", "#24252d"]}
            locations={[0.3, 0.5, 0.8]}
          >
            <Text style={styles.text}>Cancel Current Subscription</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.blackLine} />
        <TouchableOpacity onPress={() => props.navigation.navigate('NowPlaying')}>
          <LinearGradient
            style={styles.button}
            colors={["#373843", "#2e2f39", "#24252d"]}
            locations={[0.3, 0.5, 0.8]}
          >
            <Text style={styles.text}>Save and Continue</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
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
  circleSmall: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateX: "-50%" }, { rotate: "-45deg" }],
    bottom: -15,
    left: "50%"
  },
  circleBlackSmall: {
    width: 26,
    height: 26,
    borderRadius: 100,
    backgroundColor: "#000",
    position: "relative",
    zIndex: 0
  },
  circleInnerImageWrapper: {
    position: "relative"
  },
  circleInnerImage: {
    width: 175,
    height: 175,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "45deg" }]
  },
  circleInnerImageSmall: {
    width: 15,
    height: 15,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "45deg" }]
  },
  leftArrow: {
    position: "absolute",
    left: 20,
    top: 40
  },
  login: {
    color: "#abaed0",
    fontSize: 14,
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
  textAdditional: { color: "#abaed0", fontWeight: "700" },
  containerBeforeSlider: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%"
  },
  containerPlanList: {
    width: "inherit",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "flex-start",
    paddingVertical: 20
  },
  containerButtons: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    width: vw(100)
  },
  list: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#202024"
  },
  inputChannelButton: {
    height: 40,
    width: vw(40),
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
  containerPlan: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    width: vw(100),
    paddingBottom: 10
  },
  planList: {
    height: 120,
    width: vw(40),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20
  },
  buttonColor: {
    color: "#abaed0"
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
  moneyIcon: {
    width: 30,
    height: 48,
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
    width: vw(80),
    marginBottom: 28,
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
  },
  textPrice: {
    color: "#abaed0",
    fontSize: 56,
    fontWeight: "700",
    marginRight: 5
  },
  textList: {
    color: "#abaed0",
    marginBottom: 10,
    fontSize: 12
  },
  textTitle: {
    color: "#abaed0",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 21,
    fontWeight: "700"
  },
  textTitleWrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: 40
  }
});

export default EditProfile;
