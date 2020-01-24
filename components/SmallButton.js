import React from 'react';
import {Image, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import View from "react-native-web/src/exports/View";

const SmallButton = ({imagePath}) => {
    return (
        <View style={styles.headerButtonRight}>
            <TouchableOpacity onPress={()=> console.log('work')}>
                <LinearGradient
                    colors={["#08080a", "#1d1e25"]}
                    style={styles.square}
                    locations={[0.05, 1]}
                >
                    <Image
                        source={
                            __DEV__
                                ? require("../assets/images/next.png")
                                : require("../assets/images/next.png")
                        }
                        style={styles.iconHeart}
                    />
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    headerButtonRight: {
        paddingHorizontal: 5,
    },
    square: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderRadius: 3,
        borderTopColor: "#202024",
        borderLeftColor: "#202024",
        borderRightColor: "#202024",
        borderBottomColor: "#4d4f5e",
        borderWidth: 1
    },
    iconHeart: {
        width: 15,
        height: 15
    },
}
export default SmallButton;