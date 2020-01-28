import React from "react";
import {
  ImageBackground,
  Text,
  View
} from "react-native";
import { vw } from "react-native-expo-viewport-units";
import SmallButton from "../components/SmallButton";
import EqualizerScreen from "../components/EqualizerScreen";
import SwitchButtons from "../components/SwitchButtons";
import MyCarousel from "../components/Carousel";
import addSong from "../assets/images/icons/ad-song.png";
import MessageBoard from "../components/MessageBoard";
import PlayButtons from "../components/PlayButtons";

const NowPlaying = () => {


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
        <PlayButtons/>
        <View style={styles.containerCarousel}>
          <MyCarousel />
        </View>
        <View style={styles.containerBeforeSlider}>
          <Text style={styles.textAdditional}>• Up Next</Text>
          <SmallButton path={addSong} />
        </View>
        {/*<View style={styles.containerArtists}>*/}
        {/*    <SliderArtists/>*/}
        {/*</View>*/}
        {/*<EqualizerScreen />*/}
        <View style={styles.containerBeforeSlider}>
          <Text style={styles.textAdditional}>• Message Board</Text>
          <SwitchButtons />
        </View>
        <View style={styles.containerBeforeSlider}>
          <MessageBoard />
        </View>
        <View style={styles.underline} />
      </ImageBackground>
    </View>
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%"
  },
  textAdditional: { color: "#abaed0" },
  containerCarousel: {
    flexDirection: "row",
    alignItems: "center"
  }
};
export default NowPlaying;
