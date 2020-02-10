import React from "react";
import Carousel from "react-native-snap-carousel";
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";
import AppContext from "../context/AppContext";
import { vw } from "react-native-expo-viewport-units";

const SubListOfRadioStation = () => {
    const { preparedSongs } = React.useContext(AppContext);

       const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() =>  console.log('w')}>
                <ImageBackground
                    style={styles.image}
                    source={item.imageSigner}
                    imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                >
                    <Text style={styles.titleSongContainer}>{item.titleSong}</Text>
                </ImageBackground>
                <Text style={styles.songContainer}>{item.song}</Text>
            </TouchableOpacity>
            </View>
        );
    };
    const SLIDE_WIDTH = Math.round(vw(100) / 5);
    const ITEM_WIDTH = SLIDE_WIDTH + 30;
    const SLIDER_WIDTH = vw(100);
    return (
        <Carousel
            data={preparedSongs}
            renderItem={_renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            layoutCardOffset={9}
            activeAnimationType={'spring'}
            activeSlideAlignment={preparedSongs.length < 3 ? 'center' : 'start'}
            activeAnimationOptions={{
                friction: 4,
                tension: 40
            }}
        />
    );
};
const styles = StyleSheet.create({
    imageContainer: {
        height: 100,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4d4f5e",
        borderRadius: 10,
        paddingBottom: 20
    },
    image: {
        width: 80,
        height: 80,
        justifyContent: "flex-end",
        paddingTop: 5,
    },
    titleSongContainer: {
        paddingVertical: 5,
        textAlign: "center",
        color: "#fff",
        fontSize: 10
    },
    songContainer: {
        paddingVertical: 5,
        textAlign: "center",
        color: "#fff",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        fontSize: 10
    }
});
export default SubListOfRadioStation;
