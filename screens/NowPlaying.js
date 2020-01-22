import React from 'react';
import View from "react-native-web/src/exports/View";
import {ImageBackground} from "react-native";

const NowPlaying = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={
                    __DEV__
                        ? require("../assets/images/background.jpg")
                        : require("../assets/images/background.jpg")
                }
                style={styles.imageBackground}
            >
            </ImageBackground>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start"
    },
}
export default NowPlaying;