import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoadingProgress from "../components/LoadingProgress";
import AnimatedProgressProvider from "../components/AnimatedProgressProvider";
import {easeQuadInOut} from "d3-ease";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const propTypes = {};

function SplashLoading(props) {
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
              style={styles.circleInnerImage}
            />
          </View>
        </LinearGradient>
        <LoadingProgress
          percent={50}
          radius={30}
          borderWidth={4}
          shadowColor="rgba(0, 0, 0, 0.6)"
          bgColor="#292231"
        >
          <AnimatedProgressProvider
              valueStart={0}
              valueEnd={100}
              duration={1}
              easingFunction={easeQuadInOut}
          >
            {value => {
              const roundedValue = Math.round(value);
              return (
                  <CircularProgressbar
                      style={{color: "#ffffff", fontSize: 29}}

                      value={value}
                      text={`${roundedValue}%`}
                  />
              );
            }}
          </AnimatedProgressProvider>
        </LoadingProgress>
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
  circle: {
    width: 185,
    height: 185,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-45deg" }]
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
  }
});

SplashLoading.propTypes = propTypes;

export default SplashLoading;
