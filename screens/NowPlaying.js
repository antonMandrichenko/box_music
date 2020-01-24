import React from 'react';
import {
    Image,
    ImageBackground,
    Platform,
    Text,
    TextInput,
    TouchableNativeFeedback,
    TouchableOpacity,
    View
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {vw} from "react-native-expo-viewport-units";
import SliderArtists from "../components/SliderArtists";
import ListArtists from "../components/ListArtists";
import SmallButton from "../components/SmallButton";
import EqualizerScreen from "../components/EqualizerScreen";
import SwitchButtons from "../components/SwitchButtons";
import MyCustomCarousel from "../components/Carousel";

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
                <MyCustomCarousel />
                <View style={styles.containerHeader}>
                    <View style={styles.containerHeaderButtons}>
                        <View style={styles.containerHeaderButtonsLeft}>
                            <View style={styles.buttonPlay}>
                            <TouchableOpacity onPress={()=> console.log('work')}>
                                <Image
                                    source={
                                        __DEV__
                                            ? require("../assets/images/play.png")
                                            : require("../assets/images/play.png")
                                    }
                                    style={styles.iconPlay}
                                />
                            </TouchableOpacity>
                            </View>
                            <View style={styles.buttonNext} >
                                <TouchableOpacity onPress={()=> console.log('work')}>
                                    <Image
                                        source={
                                            __DEV__
                                                ? require("../assets/images/next.png")
                                                : require("../assets/images/next.png")
                                        }
                                        style={styles.iconNext}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.containerHeaderButtonsRight}>
                            <SmallButton imagePath="../assets/images/next.png"/>
                            <SmallButton imagePath="../assets/images/next.png"/>
                            <SmallButton imagePath="../assets/images/next.png"/>
                            <SmallButton imagePath="../assets/images/next.png"/>
                            <SmallButton imagePath="../assets/images/next.png"/>
                        </View>
                    </View>
                    <View style={styles.containerHeaderInputStation}>
                        <View style={styles.selectWrapper}>
                            <LinearGradient
                                colors={["#08080a", "#1d1e25"]}
                                style={styles.inputWrapperShort}
                                locations={[0.05, 1]}
                            >
                                <TextInput
                                    style={styles.inputShort}
                                    placeholder="My Vybn Station (3253 track)"
                                    placeholderTextColor="#abaed0"
                                />
                            </LinearGradient>
                            <View>
                                <TouchableNativeFeedback
                                    onPress={()=> console.log('w')}
                                    background={
                                        Platform.OS === "android"
                                            ? TouchableNativeFeedback.SelectableBackground()
                                            : ""
                                    }
                                >
                                    <LinearGradient
                                        style={styles.inputChannelButton}
                                        colors={["#373843", "#2e2f39", "#24252d"]}
                                        locations={[0.3, 0.5, 0.8]}
                                    >
                                        <View>
                                            <Text style={styles.triangleBottom} />
                                        </View>
                                    </LinearGradient>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>
                </View>
                <ListArtists/>
                <View style={styles.containerBeforeSlider}>
                    <Text style={styles.textAdditional}>• Up Next</Text>
                    <SmallButton imagePath="../assets/images/next.png" />
                </View>
                <View style={styles.containerArtists}>
                    <SliderArtists/>
                </View>
                <EqualizerScreen />
                <View style={styles.containerBeforeSlider}>
                    <Text style={styles.textAdditional}>• Message Board</Text>
                    <SwitchButtons/>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    imageBackground: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20
    },
    containerHeader: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    containerHeaderButtons: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    containerHeaderButtonsLeft: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    containerHeaderButtonsRight: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    containerHeaderInputStation: {
        paddingBottom: 10
    },
    buttonPlay: {
        width: 50,
        height: 50,
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: '#2a2730',
        justifyContent: 'center',
        alignItems: 'center',
        display: "flex",
    },
    buttonNext: {
        width: 40,
        height: 25,
        borderTopColor: '#000000',
        borderBottomColor: '#000000',
        borderRightColor: '#000000',
        borderLeftColor: 'transparent',
        borderWidth: 2,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: '#2a2730',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: -4,
        zIndex: -1
    },
    iconPlay: {
        width: 30,
        height: 30,
    },
    iconNext: {
        width: 20,
        height: 10,
    },
    iconHeart: {
        width: 15,
        height: 15
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
    selectWrapper: {
        flexDirection: "row"
    },
    inputWrapperShort: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderTopColor: "#202024",
        borderLeftColor: "#202024",
        borderRightColor: "#202024",
        borderBottomColor: "#4d4f5e",
        height: 39,
        width: 240,
        marginRight: 15,
        shadowColor: "#484982",
        shadowOffset: {
            width: 0,
            height: 16,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10,

        elevation: 15,
    },
    inputShort: {
        borderWidth: 0,
        height: 39,
        color: "#abaed0",
        paddingLeft: 15,
        width: 240
    },
    inputChannelButton: {
        height: 39,
        width: vw(12),
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
    },
    triangleBottom: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 7,
        borderRightWidth: 7,
        borderBottomWidth: 14,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#abaed0",
        transform: [{ rotate: "180deg" }]
    },
    containerArtists: {    paddingHorizontal: 10
    },
    containerBeforeSlider: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 10,
        width: "100%"
    },
    textAdditional: { color: "#abaed0"},
}
export default NowPlaying;