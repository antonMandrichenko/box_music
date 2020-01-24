import React from "react";

import {
  View,
  StyleSheet,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { vw } from "react-native-expo-viewport-units";
import TouchableOpacity from "react-native-web/src/exports/TouchableOpacity";

const SwitchButtons = () => {
  const [switchValue, setSwitchValue] = React.useState(false);

  const darkColors = ["#373843", "#2e2f39", "#24252d"];
  const colorColors = ["#8855c1", "#8855c1", "#634cc8"];
  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSwitch}>
        <LinearGradient
          style={styles.inputChannelButton}
          colors={ switchValue ? darkColors : colorColors}
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
          colors={ switchValue ? colorColors : darkColors}
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
    flexDirection: "row",
    borderRadius: 3,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e",
    borderWidth: 1
  },
  inputChannelButton: {
    height: 39,
    width: vw(12),
    margin: 9,
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
