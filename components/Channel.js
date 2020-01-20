import React, { useContext } from "react";
import { Text, View, ImageBackground } from "react-native";
import CheckboxComponent from "./CheckboxComponent";
import AppContext from "../context/AppContext";
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import PropTypes from 'prop-types';

const Channel = ({ styles, data }) => {
  const { checkBoxIn, checked, filter, counter } = useContext(AppContext);
  return (
    <>
      {data &&
        data.filter(item => item.title.slice(0, 10).includes(filter))
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
                    source={{ uri: `${song.header_image_thumbnail_url}` }}
                  >
                    <CheckboxComponent checked={checked[song.title.slice(0, 10)]} />
                  </ImageBackground>
                </View>
              </View>
              <Text style={styles.radioStation}>{song.title.slice(0, 10)}</Text>
            </TouchableOpacity>
          ))
          .slice(counter.start, counter.end)}
    </>
  );
};

Channel.propTypes = {
  styles: PropTypes.object.isRequired,
  data: PropTypes.array,
};
export default Channel;
