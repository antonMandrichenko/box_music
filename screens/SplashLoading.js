import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AnimatedCircularProgress from "../components/AnimatedCircularProgress";
import firebase from "../config/firebase";

const SplashLoading = ({ navigation }) => {
  const checkIfLogin = () =>
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("ChooseChannel");
      } else {
        navigation.navigate("Login");
      }
    });
  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          __DEV__
            ? require("../assets/images/background.png")
            : require("../assets/images/background.png")
        }
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundPosition: "center"
        }}
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
            />
          </View>
        </LinearGradient>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#211725", "#382742", "#211725"]}
          style={{
            width: 78,
            height: 78,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center"
          }}
          locations={[0, 0.5, 1]}
        >
          <View
            style={{
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#211725", "#382742", "#211725"]}
              style={{
                width: 58,
                height: 58,
                borderRadius: 50,
                position: "absolute",
                alignItems: "center",
                justifyContent: "center"
              }}
              locations={[0, 0.5, 1]}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#211725", "#382742", "#211725"]}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 50,
                  position: "absolute",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                locations={[0, 0.5, 1]}
              />
            </LinearGradient>
            <AnimatedCircularProgress
              size={68}
              width={5}
              prefill={0}
              fill={100}
              duration={0}
              onAnimationComplete={checkIfLogin}
              backgroundColor="#3a2e42"
              tintColor="#7a5dd5"
              style={{
                transform: [{ rotate: `-90deg` }]
              }}
            >
              {fill => (
                <Text
                  style={{
                    color: "#7a5dd5",
                    fontSize: 9,
                    transform: [{ rotate: `90deg` }]
                  }}
                >
                  {`${fill.toFixed(0)}%`}
                </Text>
              )}
            </AnimatedCircularProgress>
          </View>
        </LinearGradient>
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
  circle: {
    width: 185,
    height: 185,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 130
  },
  circleInner: {
    width: 175,
    height: 175,
    borderRadius: 100,
    backgroundColor: "#292930",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SplashLoading;
