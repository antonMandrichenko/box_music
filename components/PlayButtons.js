import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View, Modal, TouchableHighlight
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
import { FontAwesome5 } from "@expo/vector-icons";
import UserProfileButton from "./UserProfileButton";
import ReviewContext from "../context/ReviewContext";

const PlayButtons = ({ nav }) => {
  const { handlePlayPause, handleNextTrack, isPlaying,  } = useContext(
    PlayerContext
  );
  const { preparedSongs, goForward, goBack, removeSong, pickerSelection, pickerDisplayed, setPickerValue, togglePicker} = React.useContext(AppContext);
  const {sendLike, like } = React.useContext(ReviewContext);
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
                  style={{ marginLeft: 3 }}
                />
              ) : (
                <FontAwesome5
                  name="play"
                  size={16}
                  color="#E55FA3"
                  style={{ marginLeft: 3 }}
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
          <SmallButton path={heart} onPress={sendLike} like={like}/>
          <SmallButton path={cancel} onPress={removeSong}/>
          <SmallButton path={arrowTop} onPress={goForward} />
          <SmallButton path={arrowBottom} onPress={goBack} />
          <UserProfileButton path={user} nav={nav} />
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
              placeholder={`My Vybn Station (${preparedSongs.length} tracks)`}
              placeholderTextColor="#abaed0"
              value={pickerSelection}
            />
          </LinearGradient>
          <View>

            <TouchableNativeFeedback
                onPress={togglePicker}
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
            <Modal
                visible={pickerDisplayed}
                animationType={"slide"}
                transparent={true}
            >
              <View style={styles.modalWindow}>
                {preparedSongs.map((value, index) => {
                  return (
                      <React.Fragment key={index}>
                      <Image style={styles.modalImage} source={value.image}/>

                      <TouchableHighlight
                          key={index}
                          onPress={() =>
                              setPickerValue(value.title)
                          }
                          style={{ paddingTop: 4, paddingBottom: 4 }}
                      >

                          <Text style={styles.modalText}>
                            {value.title}
                          </Text>


                      </TouchableHighlight>
                      </React.Fragment>
                  );
                })}

                <TouchableHighlight
                    onPress={togglePicker}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                >
                  <Text style={styles.modalTextCancel}>Cancel</Text>
                </TouchableHighlight>
              </View>
            </Modal>
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
  },
  modalWindow: {
    borderWidth: 1,
    backgroundColor: "rgba(0,0,0, .8)",
    borderColor: "#202024",
    borderRadius: 3,
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",

    position: "absolute"
  },
    modalText: {
    color: "#abaed0",
      padding: 10,
      fontSize: 16,
      width: "100%"
},
  modalTextCancel: {
    color: "#abaed0",
      padding: 20,
      fontSize: 24,
      borderRadius: 3,
      borderColor: "#abaed0"
},
  modalImage: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    marginRight: 10
  }
});
export default PlayButtons;
