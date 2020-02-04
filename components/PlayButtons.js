import React, {useContext} from "react";
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from "react-native";
import SmallButton from "./SmallButton";
import heart from "../assets/images/icons/heart.png";
import cancel from "../assets/images/icons/cancel.png";
import arrowTop from "../assets/images/icons/arrow-top.png";
import arrowBottom from "../assets/images/icons/arrow-bot.png";
import user from "../assets/images/freddie.png";
import { LinearGradient } from "expo-linear-gradient";
import { vw } from "react-native-expo-viewport-units";
import AppContext from "../context/AppContext";
import PlayerContext from "../context/PlayerContext";
import {FontAwesome5} from "@expo/vector-icons";
import UserProfileButton from "./UserProfileButton";

const PlayButtons = props => {
  const {
    handlePlayPause,
    handleNextTrack,
    isPlaying,
  } = useContext(PlayerContext);
  const {songs} = React.useContext(AppContext)
  return (
    <>
      <View style={styles.containerHeaderButtons}>
        <View style={styles.containerHeaderButtonsLeft}>
          <View style={styles.buttonPlay}>
            <TouchableOpacity onPress={handlePlayPause}>
              {isPlaying ? (
                  <FontAwesome5
                      name="pause"
                      size={16}
                      color="#E55FA3"
                      style={{marginLeft: 3}}
                  />
              ) : (
                  <FontAwesome5
                      name="play"
                      size={16}
                      color="#E55FA3"
                      style={{marginLeft: 3}}
                  />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.buttonNext}>
            <TouchableOpacity onPress={handleNextTrack}>
              <Image
                source={
                  __DEV__
                    ? require("../assets/images/next.png")
                    : require("../assets/images/next.png")
                }
                style={styles.iconNext}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerHeaderButtonsRight}>
          <SmallButton path={heart} />
          <SmallButton path={cancel} />
          <SmallButton path={arrowTop} />
          <SmallButton path={arrowBottom} />
          <UserProfileButton path={user}/>
        </View>
      </View>
      <View style={styles.containerHeaderInputStation}>
        <View style={styles.selectWrapper}>
          <LinearGradient
            colors={["#08080a", "#1d1e25"]}
            style={styles.inputWrapperShort}
            locations={[0.05, 1]}
          >
            <TextInput
              style={styles.inputShort}
              placeholder={`My Vybn Station (${songs.length} tracks)`}
              placeholderTextColor="#abaed0"
            />
          </LinearGradient>
          <View>
            <TouchableNativeFeedback
              background={
                Platform.OS === "android"
                  ? TouchableNativeFeedback.SelectableBackground()
                  : ""
              }
            >
              <LinearGradient
                style={styles.inputChannelButton}
                colors={["#373843", "#2e2f39", "#24252d"]}
                locations={[0.3, 0.5, 0.8]}
              >
                <View>
                  <Text style={styles.triangleBottom} />
                </View>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerHeaderButtons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  containerHeaderButtonsLeft: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  containerHeaderButtonsRight: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row"
  },
  containerHeaderInputStation: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "space-between"
  },
  buttonPlay: {
    width: 50,
    height: 50,
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "#2a2730",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  buttonNext: {
    width: 40,
    height: 25,
    borderTopColor: "#000000",
    borderBottomColor: "#000000",
    borderRightColor: "#000000",
    borderLeftColor: "transparent",
    borderWidth: 2,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#2a2730",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    left: -4,
    zIndex: 0
  },
  iconPlay: {
    width: 30,
    height: 30
  },
  iconNext: {
    width: 20,
    height: 10
  },
  iconHeart: {
    width: 15,
    height: 15
  },
  selectWrapper: {
    flexDirection: "row"
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
    width: vw(80),
    marginRight: 15
  },
  inputShort: {
    borderWidth: 0,
    height: 39,
    color: "#abaed0",
    paddingLeft: 15,
    width: vw(80)
  },
  inputChannelButton: {
    height: 39,
    width: vw(12),
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
  triangleBottom: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 14,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#abaed0",
    transform: [{ rotate: "180deg" }]
  }
});
export default PlayButtons;
