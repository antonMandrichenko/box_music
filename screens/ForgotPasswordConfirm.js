import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity, ScrollView, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "../config/firebase";

const ForgotPasswordConfirm = (props) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handlePasswordReset = async () => {
            firebase
                .auth()
                .sendPasswordResetEmail(email)
                .then(function() {
                props.navigation.navigate("ForgotPassword");
            }).catch(function(error) {
                setError(error.message);
            });

    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView>
        <View style={styles.container}>
            <ImageBackground
                source={
                    __DEV__
                        ? require("../assets/images/emailconfirm-background.jpg")
                        : require("../assets/images/emailconfirm-background.jpg")
                }
                style={styles.imageBackground}
            >
                <Text
                    style={styles.textMain}
                >
                    reset password
                </Text>
                <Image
                    source={
                        __DEV__
                            ? require("../assets/images/icons/email-copy.png")
                            : require("../assets/images/icons/email-copy.png")
                    }
                    style={styles.iconEmail}
                />
                <Text
                    style={styles.textAdditional}
                >
                    please, type your email
                </Text>
                <View style={styles.blackLine} />
                <KeyboardAvoidingView style={styles.containerWrapKeyboard} behavior="height" enabled>
                <LinearGradient
                    colors={["#08080a", "#1d1e25"]}
                    style={styles.inputWrapper}
                    locations={[0.05, 1]}
                >
                    <ImageBackground
                        source={
                            __DEV__
                                ? require("../assets/images/icons/email.png")
                                : require("../assets/images/icons/email.png")
                        }
                        style={styles.iconEmailMain}
                    />
                    <View
                        style={styles.line}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={input => setEmail(input)}
                        value={email}
                        placeholder="Enter your email"
                        placeholderTextColor="#abaed0"
                    />
                </LinearGradient>
                </KeyboardAvoidingView>
                <Text
                    style={styles.textDescription}
                >
                    You told us you forgot your password. If you really did, click here to choose a new one
                </Text>
                <Text
                    style={styles.textDescription}
                >
                    If you didn't mean to reset your password, then you can just ignore this email;
                    your password will not change.
                </Text>
                <Text style={styles.error}>{error}</Text>
                <View style={styles.blackLine} />
                <TouchableOpacity
                    onPress={() =>
                        handlePasswordReset()
                    }
                >
                    <LinearGradient
                        style={styles.button}
                        colors={["#373843", "#2e2f39", "#24252d"]}
                        locations={[0.3, 0.5, 0.8]}
                    >
                        <Text style={styles.text}>Next</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View
                    style={styles.add}
                />
            </ImageBackground>
        </View>
        </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    textMain: {
        color: "#fff",
        textTransform: "uppercase",
        textAlign: "center",
        paddingTop: 45,
        paddingBottom: 75,
        fontSize: 21
    },
    iconEmail: {
        width: 135,
        height: 100
    },
    textAdditional: {
        color: "#abaed0",
        textTransform: "uppercase",
        textAlign: "center",
        paddingTop: 48,
        paddingBottom: 28,
        fontSize: 21,
        fontWeight: "700"
    },
    iconEmailMain: {
        width: 32,
        height: 26,
        marginRight: 12
    },
    line: {
        height: 13,
        width: 1,
        backgroundColor: "#abaed0",
        marginRight: 12
    },
    error: { color: "red", height: 15, marginBottom: 20 },
    textDescription: {
        width: 285,
        textAlign: "center",
        color: "#abaed0",
        paddingTop: 5,
        marginBottom: 25
    },
    button: {
        height: 39,
        width: 302,
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
    add: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 35
    },
    circle: {
        width: 185,
        height: 185,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        transform: [{ rotate: "-45deg" }],
        marginTop: 40
    },
    circleInner: {
        width: 175,
        height: 175,
        borderRadius: 100,
        backgroundColor: "#292930",
        alignItems: "center",
        justifyContent: "center"
    },
    circleInnerImage: {
        transform: [{ rotate: "45deg" }]
    },
    login: {
        color: "#abaed0",
        textTransform: "uppercase",
        fontSize: 20,
        fontWeight: "700",
        marginTop: 35,
        marginBottom: 20,
        borderRadius: 5
    },
    blackLine: {
        width: 23,
        height: 6,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#08080a",
        borderColor: "#202024",
        borderRadius: 3,
        marginBottom: 20
    },
    inputWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderTopColor: "#202024",
        borderLeftColor: "#202024",
        borderRightColor: "#202024",
        borderBottomColor: "#4d4f5e",
        height: 39,
        width: 302
    },
    input: {
        borderWidth: 0,
        height: 39,
        width: 302,
        color: "#abaed0"
    },
    buttonLogin: {
        height: 39,
        width: 302,
        marginBottom: 9,
        borderWidth: 0,
        textAlign: "center",
        color: "#abaed0",
        textShadowColor: "#272730",
        textShadowOffset: { width: -1, height: -1 }
    },
    text: {
        color: "#abaed0",
        textShadowColor: "#272730",
        textShadowOffset: { width: 1, height: 2 },
        fontSize: 12
    },
    containerWrapKeyboard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ForgotPasswordConfirm;
