import React, { useContext } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { vw } from "react-native-expo-viewport-units";
import SmallButton from "../components/SmallButton";
import EqualizerScreen from "../components/EqualizerScreen";
import SwitchButtons from "../components/SwitchButtons";
import ListOfRadioStation from "../components/ListOfRadioStation";
import addSong from "../assets/images/icons/ad-song.png";
import MessageBoard from "../components/MessageBoard";
import PlayButtons from "../components/PlayButtons";
import AppContext from "../context/AppContext";
import TrackPlayerComponent from "../components/TrackPlayerComponent";
import SubListOfRadioStation from "../components/SubListOfRadioStation";
import PlayerContext from "../context/PlayerContext";

const NowPlaying = () => {
  const { switchValue } = React.useContext(AppContext);
  const { isPlaying } = React.useContext(PlayerContext);

  return (
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
          <PlayButtons />
          <View style={styles.containerCarousel}>
            <ListOfRadioStation />
          </View>
          <View style={styles.containerBeforeSlider}>
            <Text style={styles.textAdditional}>• Up Next</Text>
            <SmallButton path={addSong} />
          </View>
          <View style={styles.containerSubCarousel}>
            <SubListOfRadioStation />
          </View>
          <View style={styles.containerEqualizer}>
            <EqualizerScreen playing={isPlaying} />
          </View>
          <View style={styles.containerBeforeSlider}>
            {switchValue ? (
              <Text style={styles.textAdditional}>• Message Board</Text>
            ) : (
              <Text style={styles.textAdditional}>• Player Board</Text>
            )}
            <SwitchButtons />
          </View>
          {switchValue ? (
            <View style={styles.containerBeforeSlider}>
              <MessageBoard />
            </View>
          ) : (
            <TrackPlayerComponent />
          )}
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = {
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
  containerArtists: { paddingHorizontal: 10 },
  containerBeforeSlider: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%"
  },
  textAdditional: { color: "#abaed0" },
  containerCarousel: {
    flexDirection: "row",
    alignItems: "center"
  },
  containerSubCarousel: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingBottom: 10
  },
  containerEqualizer: {
    alignItems: "center",
    justifyContent: "center",
    width: vw(100)
  }
};
export default NowPlaying;
