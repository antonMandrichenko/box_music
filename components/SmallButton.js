import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

const SmallButton = ({path, onPress}) => {
    return (
        <View style={styles.headerButtonRight}>
            <TouchableOpacity onPress={onPress}>
                <LinearGradient
                    colors={["#08080a", "#1d1e25"]}
                    style={styles.square}
                    locations={[0.05, 1]}
                >
                    <Image
                        source={path}
                        style={styles.iconHeart}
                    />
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
})
export default SmallButton;