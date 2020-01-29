import React from "react";
import Carousel from "react-native-snap-carousel";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppContext from "../context/AppContext";
import { vw } from "react-native-expo-viewport-units";

const MyCarousel = () => {
  const { preparedSongs } = React.useContext(AppContext);

  const styles = StyleSheet.create({
    imageContainer: {
      width: 180,
      height: 180,
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
      borderBottomLeftRadius: 20,
    }
  });

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => alert(item.primary_artist.name)}>
        <Image
          style={styles.imageContainer}
          source={{ uri: item.header_image_thumbnail_url }}
        />
        <Text style={styles.textContainer}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Carousel
      data={preparedSongs}
      renderItem={_renderItem}
      sliderWidth={vw(100)}
      itemWidth={180}
      inactiveSlideScale={0.94}
      inactiveSlideOpacity={0.7}
      autoplay={true}
      autoplayDelay={500}
      autoplayInterval={3000}
      layoutCardOffset={9}
      activeAnimationType={'spring'}
      activeAnimationOptions={{
        friction: 4,
        tension: 40
      }}
      loop={true}
    />
  );
};

export default MyCarousel;
