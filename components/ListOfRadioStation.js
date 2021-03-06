import React from "react";
import Carousel from "react-native-snap-carousel";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppContext from "../context/AppContext";
import { vw } from "react-native-expo-viewport-units";
import ReviewContext from "../context/ReviewContext";

const ListOfRadioStation = ({ handleCurrentTrack }) => {
  const { renderSongs, carouselRef } = React.useContext(AppContext);
  const { setCurrentSong } = React.useContext(ReviewContext);

  const styles = StyleSheet.create({
    imageContainer: {
      width: 150,
      height: 150,
      borderWidth: 2,
      borderColor: "#000",
      borderRadius: 20
    },
    textContainer: {
      paddingVertical: 10,
      textAlign: "center",
      color: "#fff",
      backgroundColor: "transparent",
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20
    }
  });

  const _renderItem = ({ item, index }) => {
    const handleCurrentTrackFunc = () => handleCurrentTrack(index);
    setCurrentSong(item.song);
    return (
      // <TouchableOpacity onPress={handleCurrentTrackFunc}>
      <>
        <Image style={styles.imageContainer} source={item.image} />
        <Text style={styles.textContainer}>{item.title}</Text>
      </>
      // {/*// </TouchableOpacity>*/}
    );
  };
  return (
    <Carousel
      firstItem={1}
      data={renderSongs}
      renderItem={_renderItem}
      sliderWidth={vw(100)}
      itemWidth={150}
      inactiveSlideScale={0.94}
      inactiveSlideOpacity={0.3}
      layoutCardOffset={9}
      activeAnimationType={"spring"}
      activeAnimationOptions={{
        friction: 4,
        tension: 40
      }}
      ref={carouselRef}
    />
  );
};

export default ListOfRadioStation;
