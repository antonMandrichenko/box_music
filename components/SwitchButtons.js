import React from "react";

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppContext from "../context/AppContext";

const SwitchButtons = () => {

  const {switchValue, toggleSwitch} = React.useContext(AppContext);

  const darkColors = ["#373843", "#2e2f39", "#24252d"];
  const lightColors = ["#8855c1", "#8855c1", "#634cc8"];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSwitch}>
        <LinearGradient
          style={styles.inputChannelButton}
          colors={ switchValue ? darkColors : lightColors}
          locations={[0.3, 0.5, 0.8]}
        >
            <Image
              source={
                __DEV__
                  ? require("../assets/images/icons/headphones.png")
                  : require("../assets/images/icons/headphones.png")
              }
              style={styles.iconHeadphones}
            />
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleSwitch}>
        <LinearGradient
          style={styles.inputChannelButton}
          colors={ switchValue ? lightColors : darkColors}
          locations={[0.3, 0.5, 0.8]}
        >
            <Image
              source={
                __DEV__
                  ? require("../assets/images/icons/group.png")
                  : require("../assets/images/icons/group.png")
              }
              style={styles.iconGroup}
            />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  inputChannelButton: {
    height: 39,
    width: 39,
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
  iconHeadphones: {
    width: 15,
    height: 15
  },
  iconGroup: {
    position: "relative",
    top: 5,
    width: 25,
    height: 25
  },

});

export default SwitchButtons;
