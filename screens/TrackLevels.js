import React, {useContext} from "react";
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView, ActivityIndicator
} from "react-native";
import { vw } from "react-native-expo-viewport-units";
import user from "../assets/images/freddie.png";
import { LinearGradient } from "expo-linear-gradient";
import PlayButtons from "../components/PlayButtons";
import TrackLevel from "../components/TrackLevel";
import heart from "../assets/images/icons/heart.png";
import single from "../assets/images/icons/single.png";
import double from "../assets/images/icons/double.png";
import binoculars from "../assets/images/icons/binoculars.png";
import SubListOfRadioStation from "../components/SubListOfRadioStation";
import PropTypes from "prop-types";
import AppContext from "../context/AppContext";

const TrackLevels = ({ navigation }) => {
  const [switchValue, setSwitchValue] = React.useState(false);
  const darkColors = ["#373843", "#2e2f39", "#24252d"];
  const lightColors = ["#8855c1", "#8855c1", "#634cc8"];
  const nav = () => navigation.navigate("EditProfile");
  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
  };
  const {songs} = useContext(AppContext);

  return songs.length === 0 ? (
      <View style={[styles.containerLoader, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff"/>
      </View>
  ) : (
    <ScrollView>
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
          <PlayButtons nav={nav} />
          <View style={styles.containerHeader}>
            <TrackLevel path={heart} count={36} preFill={45} w={20} h={20} />
            <TrackLevel path={single} count={245} preFill={25} w={10} h={20} />
            <TrackLevel path={double} count={1375} preFill={15} w={10} h={20} />
            <TrackLevel
              path={binoculars}
              count={3731}
              preFill={15}
              w={25}
              h={15}
            />
          </View>
          <Text style={styles.textAdditional}>• More Albums</Text>
          <View style={styles.containerSubCarousel}>
            <SubListOfRadioStation />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
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
  },
  containerSubCarousel: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10
  },
  containerLoader: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

TrackLevels.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
export default TrackLevels;
