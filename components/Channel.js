import React, { useContext } from "react";
import { Text, View, ImageBackground, TouchableOpacity, Image } from "react-native";
import AppContext from "../context/AppContext";
import PropTypes from "prop-types";

const Channel = ({ styles, data }) => {
  const { checkBoxIn, checked, filter, counter } = useContext(AppContext);
  return (
    <>
      {
        data
          .filter(item => item.title.includes(filter))
          .map((song, i) => (
            <TouchableOpacity
              key={i}
              style={styles.circleWrapper}
              onPress={checkBoxIn}
              checked={checked[song.title]}
            >
              <View style={styles.circle}>
                <View style={styles.circleInner}>
                  <ImageBackground
                    style={styles.imageBackground}
                    source={song.image}
                  >
                    {checked[song.title] && <Image style={{width: 20, height: 20}} source={require("../assets/images/icons/checkbox-circle.png")}  />}
                  </ImageBackground>
                </View>
              </View>
              <Text style={styles.radioStation}>{song.title}</Text>

            </TouchableOpacity>
          ))
          .slice(counter.start, counter.end)}
    </>
  );
};

Channel.propTypes = {
  styles: PropTypes.object.isRequired,
  data: PropTypes.array
};
export default Channel;
