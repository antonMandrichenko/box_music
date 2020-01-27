import React from "react";
import Carousel from "react-native-snap-carousel";
import { View, Image, Text } from "react-native";
import AppContext from "../context/AppContext";
import { vw } from "react-native-expo-viewport-units";

const MyCarousel = () => {
  const { data } = React.useContext(AppContext);
  const styles = {
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
      shadowColor: "#484982",
      shadowOffset: {
        width: 0,
        height: 16,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10,
      elevation: 15,
    }
  };
  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          style={styles.imageContainer}
          source={{ uri: item.header_image_thumbnail_url }}
        />
        <Text style={styles.textContainer}>{item.title}</Text>
      </View>
    );
  };

  return (
    <Carousel
      data={data}
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
