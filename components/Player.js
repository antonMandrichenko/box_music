import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import Slider from "react-native-slider";
import Moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";

export default class App extends React.Component {
    state = {
        trackLength: 300,
        timeElapsed: "0:00",
        timeRemaining: "5:00"
    };

    changeTime = seconds => {
        this.setState({ timeElapsed: Moment.utc(seconds * 1000).format("m:ss") });
        this.setState({ timeRemaining: Moment.utc((this.state.trackLength - seconds) * 1000).format("m:ss") });
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={{ margin: 32 }}>
                    <Slider
                        minimumValue={0}
                        maximumValue={this.state.trackLength}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        minimumTrackTintColor="#93A8B3"
                        onValueChange={seconds => this.changeTime(seconds)}
                    />
                    <View style={{ marginTop: -12, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeElapsed}</Text>
                        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeRemaining}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 5 }}>
                    <TouchableOpacity>
                        <FontAwesome5 name="backward" size={16} color="#93A8B3"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.playButtonContainer}>
                        <FontAwesome5
                            name="play"
                            size={16}
                            color="#3D425C"
                            style={{ marginLeft: 8 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome5 name="forward" size={16} color="#93A8B3"/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    textLight: {
        color: "#B6B7BF"
    },
    text: {
        color: "#8E97A6"
    },
    textDark: {
        color: "#3D425C"
    },
    coverContainer: {
        marginTop: 10,
        width: 250,
        height: 250,
        shadowColor: "#5D3F6A",
        shadowOffset: { height: 15 },
        shadowRadius: 8,
        shadowOpacity: 0.3
    },
    cover: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    track: {
        height: 2,
        borderRadius: 1,
        backgroundColor: "#000"
    },
    thumb: {
        width: 8,
        height: 8,
        backgroundColor: "#8855c1"
    },
    timeStamp: {
        fontSize: 11,
        fontWeight: "500"
    },
    playButtonContainer: {
        backgroundColor: "#FFF",
        borderColor: "rgba(93, 63, 106, 0.2)",
        borderWidth: 8,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        shadowColor: "#5D3F6A",
        shadowRadius: 30,
        shadowOpacity: 0.5
    }
});