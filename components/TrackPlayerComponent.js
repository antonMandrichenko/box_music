import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Play from "./Play";
import PlayerContext from "../context/PlayerContext";
import {radioPlaylist} from "../api/RadioPlaylist";

const TrackPlayerComponent = () => {
  const {
    handlePlayPause,
    handlePreviousTrack,
    handleNextTrack,
    isPlaying,
    currentIndex,
    playbackInstance
  } = useContext(PlayerContext);

  const renderFileInfo = () => {
    return playbackInstance ? (
        <View style={styles.trackInfo}>
          <Text style={[styles.trackInfoText, styles.largeText]}>
            {radioPlaylist[currentIndex].title}
          </Text>
        </View>
    ) : null;
  };
  return (
    <View style={styles.container}>
      <View
        style={styles.containerWrapper}
      >
        <TouchableOpacity onPress={handlePreviousTrack}>
          <FontAwesome5 name="backward" size={16} color="#93A8B3" />
        </TouchableOpacity>
        <Play
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          styles={styles}
        />
        <TouchableOpacity onPress={handleNextTrack}>
          <FontAwesome5 name="forward" size={16} color="#93A8B3" />
        </TouchableOpacity>
      </View>
      {renderFileInfo()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  containerWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 5,
    width: "100%"
  },
  playButtonContainer: {
    backgroundColor: "#FFF",
    borderColor: "rgba(93, 63, 106, 0.2)",
    borderWidth: 8,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    shadowColor: "#5D3F6A",
    shadowRadius: 30,
    shadowOpacity: 0.5
  },
  trackInfo: {
    padding: 10
  },
  trackInfoText: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "rgb(171, 174, 208)"
  },
  largeText: {
    fontSize: 22
  },
  smallText: {
    fontSize: 16
  },
  control: {
    margin: 20
  },
  controls: {
    flexDirection: "row"
  }
});

export default TrackPlayerComponent;
