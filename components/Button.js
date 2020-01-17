import React from 'react';
import {LinearGradient} from "expo-linear-gradient";
import {Text, TouchableOpacity} from "react-native";
import {View} from "react-native-web";

const Button = ({styles, title, handleChange}) => {
    return (
        <View>
            <TouchableOpacity onPress={handleChange}>
                <LinearGradient
                    style={{
                        height: 39,
                        marginBottom: 9,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 4,
                        borderWidth: 1,
                        borderTopColor: "#202024",
                        borderLeftColor: "#202024",
                        borderRightColor: "#202024",
                        borderBottomColor: "#4d4f5e"
                    }}
                    colors={["#373843", "#2e2f39", "#24252d"]}
                    locations={[0.3, 0.5, 0.8]}
                >
                    <Text style={styles.text}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

export default Button;