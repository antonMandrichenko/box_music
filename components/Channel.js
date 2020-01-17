import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import CheckboxComponent from "./CheckboxComponent";

const Channel = ({ styles, data }) => {
  console.log(data);
  return (
    <>
      {data &&
        data
          .map((song, i) => (
            <View key={i} style={styles.circleWrapper}>
              <View style={styles.circle}>
                <View style={styles.circleInner}>
                  <ImageBackground
                    style={styles.imageBackground}
                    source={{ uri: `${song.img}` }}
                  >
                    <CheckboxComponent />
                  </ImageBackground>
                </View>
              </View>
              <Text style={styles.radioStation}>{song.title.slice(0, 10)}</Text>
            </View>
          ))
          .slice(0, 9)}
    </>
  );
};

export default Channel;
