import React from "react";
import {Image, Slider, TouchableOpacity, View} from "react-native";
import { SliderBox } from 'react-native-image-slider-box';
import {vw} from "react-native-expo-viewport-units";


const SliderArtists = ({indexCount}) => {

    const images = [        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree"]
    return (
        <View style={styles.container}>

            <SliderBox
                images={images}
                sliderBoxHeight={200}
                sliderBoxStyle={{
                    borderWidth: 23,
                    borderColor: 'yellow'
                }}
                parentWidth={vw(60)}
                onCurrentImagePressed={index => console.warn(`image ${index + indexCount} pressed`)}
                dotColor="transparent"
                inactiveDotColor="transparent"
                paginationBoxVerticalPadding={20}
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={{
                    position: "absolute",
                    bottom: -200,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "space-between",
                    paddingVertical: 10,
                    width: "100%",
                    borderColor: 'red',
                    borderWidth: 1,
                }}
                dotStyle={{
                    width: 30,
                    height: 30,
                    backgroundColor: 'black',
                    borderColor: 'red',
                    borderWidth: 1,
                }}
            />
        </View>
    );
};

const styles = {
    container: {
        width: "100%",
        borderRadius: 15,
        borderColor: "#000",
        borderWidth: 5,
        position: "relative",
        zIndex: 4
    }
}

export default SliderArtists;


