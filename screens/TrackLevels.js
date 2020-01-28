import React from "react";
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import { vw } from "react-native-expo-viewport-units";
import user from "../assets/images/user.jpg";
import { LinearGradient } from "expo-linear-gradient";
import PlayButtons from "../components/PlayButtons";
import TrackLevel from "../components/TrackLevel";
import MyCarousel from "../components/Carousel";

const TrackLevels = props => {
  const [switchValue, setSwitchValue] = React.useState(false);
  const darkColors = ["#373843", "#2e2f39", "#24252d"];
  const lightColors = ["#8855c1", "#8855c1", "#634cc8"];
  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          __DEV__
            ? require("../assets/images/background.jpg")
            : require("../assets/images/background.jpg")
        }
        style={styles.imageBackground}
      >
        <View style={styles.containerHeader}>
          <View style={styles.center}>
            <Image style={styles.imageReview} source={user} />
            <Text style={styles.userName}> Taney Windy </Text>
          </View>
          <TouchableOpacity onPress={toggleSwitch}>
            <LinearGradient
              style={styles.inputChannelButton}
              colors={switchValue ? lightColors : darkColors}
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
        <View>
          <View style={styles.selectWrapper}>
            <LinearGradient
              colors={["#08080a", "#1d1e25"]}
              style={styles.inputWrapperShort}
              locations={[0.05, 1]}
            >
              <TextInput
                style={styles.inputShortMain}
                placeholder="R.E.M:NIGHTSSWIMMING"
                placeholderTextColor="#abaed0"
              />
            </LinearGradient>
          </View>
        </View>
        <PlayButtons/>
        <View style={styles.containerHeader}>
          <TrackLevel />
          <TrackLevel />
          <TrackLevel />
          <TrackLevel />
        </View>
        <Text style={styles.textAdditional}>• More Albums</Text>
        <MyCarousel />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  imageBackground: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start"
  },
  imageReview: {
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 5
  },
  containerHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10
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
  iconGroup: {
    position: "relative",
    top: 5,
    width: 25,
    height: 25
  },
  userName: {
    color: "#abaed0"
  },
  center: { flexDirection: "row", alignItems: "center" },

  square: {
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderRadius: 3,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e",
    borderWidth: 1
  },
  selectWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  inputWrapperShort: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e",
    height: 39,
    marginHorizontal: 10
  },
  inputShortMain: {
    borderWidth: 0,
    height: 39,
    color: "#abaed0",
    textAlign: "center",
    width: vw(92),
    fontSize: 20
  },
  inputShort: {
    borderWidth: 0,
    height: 39,
    color: "#abaed0",
    paddingLeft: 15,
    width: vw(80)
  },
  containerArtists: { paddingHorizontal: 10 },
  containerBeforeSlider: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%"
  },
  textAdditional: { color: "#abaed0", paddingLeft: 10 },
  containerCarousel: {
    flexDirection: "row",
    alignItems: "center"
  }
});
export default TrackLevels;
