import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";
import CheckboxComponent from "./CheckboxComponent";
import { LinearGradient } from "expo-linear-gradient";

const Channel = ({ styles, data }) => {
  console.log(data);
  return (
      <>
      {data &&

        data.map((song, i) => (
            <View key={i} style={styles.circleWrapper}>

            <View style={styles.circle}>
            <View style={styles.circleInner}>
              <Image style={styles.imageBackground} source={{uri: `${song.img}`}} />
              <CheckboxComponent />
            </View>
          </View>
                <Text style={styles.radioStation}>{song.title}</Text>

            </View>

        )).slice(0, 9)}
        </>
  );
};

export default Channel;
