import React from 'react';
import {TouchableOpacity, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";

function Play({isPlaying, handlePlayPause, styles}) {
    return (
        <TouchableOpacity style={styles.playButtonContainer} onPress={handlePlayPause}>
            {isPlaying ? (
                <FontAwesome5
                    name="pause"
                    size={16}
                    color="#3D425C"
                    style={{marginLeft: 3}}
                />
            ) : (
                <FontAwesome5
                    name="play"
                    size={16}
                    color="#3D425C"
                    style={{marginLeft: 3}}
                />
            )}
        </TouchableOpacity>
    );
}

export default Play;