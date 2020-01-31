import React, { useContext } from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import CheckboxComponent from "./CheckboxComponent";
import AppContext from "../context/AppContext";
import PropTypes from "prop-types";

const Channel = ({ styles, data }) => {
  const { checkBoxIn, checked, filter, counter } = useContext(
    AppContext
  );
  return (
    <>
      { data &&
      data
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
                    <CheckboxComponent
                      checked={checked[song.title]}
                    />
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
