import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
            />
          </View>
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
    justifyContent: "center"
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
  }
});

SplashLoading.propTypes = propTypes;

export default SplashLoading;
