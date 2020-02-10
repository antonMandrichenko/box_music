import React, { useContext } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import AppContext from "../context/AppContext";

const Channel = () => {
  const { filter, counter, data, checked, checkBoxIn } = useContext(AppContext);

  return (
    <>
      {data
        .filter(item => item.title.includes(filter))
        .map((song, i) => (
          <TouchableOpacity
            key={i}
            style={styles.circleWrapper}
            onPress={checkBoxIn}
          >
            <View style={styles.circle}>
              <View style={styles.circleInner}>
                <ImageBackground
                  style={styles.imageBackground}
                  source={song.image}
                >
                  {checked[song.title] && (
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../assets/images/icons/checkbox-circle.png")}
                    />
                  )}
                </ImageBackground>
              </View>
            </View>
            <View style={styles.radioStation}>
              <Text style={styles.radioStationText}>{song.title}</Text>
            </View>
          </TouchableOpacity>
        ))
        .slice(counter.start, counter.end)}
    </>
  );
};
const styles = StyleSheet.create({
  circleWrapper: {
    position: "relative",
    width: 80,
    marginHorizontal: 5,
    flexBasis: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25
  },
  circle: {
    borderRadius: 50,
    borderColor: "#1f1a26",
    borderWidth: 4
  },
  circleInner: {
    width: 72,
    height: 72,
    borderRadius: 50,
    borderColor: "#5a5ae3",
    borderWidth: 3
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  radioStation: {
    position: "absolute",
    flexBasis: "30%",
    height: 100,
    width: 80,
    top: 0,

  },
  radioStationText: {
    position: "absolute",
    top: 90,
    left: 0,
    width: 80,
    color: "#fff",
    fontSize: 10,
    textAlign: "center",
  }
});
export default Channel;
