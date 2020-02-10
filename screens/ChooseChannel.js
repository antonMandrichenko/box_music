import React, {useContext, useEffect} from "react";
import {vw} from "react-native-expo-viewport-units";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ActivityIndicator
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Channel from "../components/Channel";
import Button from "../components/Button";
import AppContext from "../context/AppContext";
import { FontAwesome5 } from "@expo/vector-icons";

const ChooseChannel = ({navigation}) => {
    const {
        setFilter,
        filter,
        handleChangeCountPrev,
        handleChangeCountNext,
        counter,
        playSelected,
        checked,
        preparedSongs
    } = useContext(AppContext);
    const nav = () => navigation.navigate("TabNavigator");

    const checkedLength = Object.keys(checked).length;
    return  (
        <View style={styles.container}>
            <LinearGradient
                style={styles.containerWrapper}
                colors={["#396276", "#4a4160", "#603b66"]}
                locations={[0.3, 0.5, 0.8]}
            >
                <View style={styles.containerHeader}>
                    <Text style={styles.textTitle}>choose your favorite</Text>
                    <Text style={styles.textMain}>channels</Text>
                    <View style={styles.blackLine}/>
                    <View style={styles.inputWrapper}>
                    <LinearGradient
                        colors={["#08080a", "#1d1e25"]}
                        locations={[0.05, 1]}
                        style={styles.inputWrapperGradient}
                    >
                        <TextInput
                            style={styles.input}
                            value={filter}
                            placeholder="search your favorite channel..."
                            placeholderTextColor="#abaed0"
                            onChangeText={e => setFilter(e.toLowerCase())}
                        />
                    </LinearGradient>
                    <LinearGradient
                        colors={["#363743", "#25252e"]}
                        style={styles.searchButton}
                        locations={[0.05, 1]}
                    >
                        <FontAwesome5 name="search" size={16} color="#93A8B3" />
                    </LinearGradient>
                    </View>
                </View>
                <View style={styles.channelContainer}>
                    <Channel />
                </View>

                <View style={styles.containerFooter}>
                    <View style={styles.containerFooterWrapper}>
                        <TouchableOpacity
                            onPress={() => {playSelected(); nav()}}
                            disabled={checkedLength === 0}
                        >
                            <LinearGradient
                                style={styles.inputChannel}
                                colors={["#373843", "#2e2f39", "#24252d"]}
                                locations={[0.3, 0.5, 0.8]}
                            >
                                <Text style={styles.text}>play selected</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled={counter.start === 0 && true}
                            onPress={handleChangeCountPrev}
                        >
                            <LinearGradient
                                style={styles.inputChannelButton}
                                colors={["#373843", "#2e2f39", "#24252d"]}
                                locations={[0.3, 0.5, 0.8]}
                            >
                                <View>
                                    <Text style={styles.triangleLeft}/>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled={counter.start > 0 && counter.end >= preparedSongs.length}
                            onPress={handleChangeCountNext}
                        >
                            <LinearGradient
                                style={styles.inputChannelButton}
                                colors={["#373843", "#2e2f39", "#24252d"]}
                                locations={[0.3, 0.5, 0.8]}
                            >
                                <View>
                                    <Text style={styles.triangleRight}/>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button
                    styles={styles}
                    title="create your own channel"
                    handleChange={() => navigation.navigate("CreateChannel")}
                />
                {/*<TouchableOpacity onPress={() => navigation.navigate("Login")}>*/}
                {/*    <Text>sign out</Text>*/}
                {/*</TouchableOpacity>*/}
            </LinearGradient>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },

    containerFooter: {
        justifyContent: "flex-end"
    },
    containerFooterWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    channelContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap"
    },
    containerWrapper: {
        height: "100%",
        width: "100%",
        paddingVertical: 23,
        paddingHorizontal: 14
    },
    textTitle: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase"
    },
    textMain: {
        fontSize: 48,
        color: "#fff",
        textTransform: "uppercase"
    },
    searchButton: {
        width: 37,
        height: 37,
        borderWidth: 1,
        borderColor: "#202024",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    inputChannel: {
        height: 39,
        width: vw(65),
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
    blackLine: {
        width: 23,
        height: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#08080a",
        borderColor: "#202024",
        borderRadius: 3,
        marginBottom: 10,
        marginTop: 10
    },
    inputWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: "#202024",
        height: 37,
        width: vw(85),
        color: "#abaed0",
        paddingLeft: 10,
        borderRadius: 5
    },
    inputWrapperGradient: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    circleWrapper: {
        position: "relative",
        width: 80,
        marginBottom: 10,
        marginHorizontal: 5,
        flexBasis: "30%",
        alignItems: "center",
        justifyContent: "center"
    },
    circle: {
        borderRadius: 50,
        borderColor: "#1f1a26",
        borderWidth: 4
    },
    circleInner: {
        width: 72,
        height: 72,
        borderRadius: 50,
        borderColor: "#5a5ae3",
        borderWidth: 3
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
        overflow: "hidden",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    checkboxCircle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 50,
        zIndex: 1
    },
    checkboxInner: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 15,
        height: 15,
        backgroundColor: "transparent",
        zIndex: 2
    },
    radioStation: {
        textAlign: "center",
        color: "#fff",
        fontSize: 14,
        marginTop: 9
    },
    text: {
        color: "#abaed0",
        textShadowColor: "#272730",
        textShadowOffset: {width: 1, height: 2},
        fontSize: 12,
        textTransform: "uppercase"
    },
    triangleLeft: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#abaed0",
        transform: [{rotate: "-90deg"}]
    },
    triangleRight: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#abaed0",
        transform: [{rotate: "90deg"}]
    },
    containerLoader: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default ChooseChannel;
