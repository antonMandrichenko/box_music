import React, {useContext} from "react";
import {ImageBackground, View, StyleSheet, Text, ActivityIndicator, ScrollView} from "react-native";
import { vw } from "react-native-expo-viewport-units";
import PlayButtons from "../components/PlayButtons";
import MessageBoard from "../components/MessageBoard";
import AddComment from "../components/AddComment";
import PropTypes from "prop-types";
import AppContext from "../context/AppContext";

const Message = ({ navigation }) => {
  const nav = () => navigation.navigate("EditProfile");
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
        <PlayButtons nav={nav} />
        <View style={styles.containerBeforeSlider}>
          <Text style={styles.textAdditional}>• Message Board</Text>
        </View>
        <View style={styles.containerBeforeSlider}>
          <MessageBoard />
        </View>
        <View style={styles.containerBeforeSlider}>
          <AddComment />
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
Message.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
export default Message;
