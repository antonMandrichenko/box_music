import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "../config/firebase";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateEmail, updatePassword, loginAction } from "../actions/user";

const propTypes = {};

function ForgotPassword(props) {
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState(false);

    const handlePasswordReset = async (values, actions) => {
        const { email } = email;
        try {
            var actionCodeSettings = {
                url:
                    "https://crypto-react-native-new.firebaseio.com/?email=" +
                    firebase.auth().currentUser.email,
                iOS: {
                    bundleId: "com.example.ios"
                },
                android: {
                    packageName: "com.example.android",
                    installApp: true,
                    minimumVersion: "12"
                },
                handleCodeInApp: true,
                // When multiple custom dynamic link domains are defined, specify which
                // one to use.
                dynamicLinkDomain: "example.page.link"
            };
            firebase
                .auth()
                .currentUser.sendEmailVerification(actionCodeSettings)
                .then(function() {
                    // Verification email sent.
                })
                .catch(function(error) {
                    // Error occurred. Inspect error.code.
                });
            await this.props.firebase.passwordReset(email);

            console.log("Password reset email sent successfully");
            this.props.navigation.navigate("Login");
        } catch (error) {
            actions.setFieldError("general", error.message);
        }
    };
    useEffect(() => {
        setLogin(loginAction);
    }, []);

    return (
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
                    style={{
                        color: "#fff",
                        textTransform: "uppercase",
                        textAlign: "center",
                        paddingTop: 45,
                        paddingBottom: 75,
                        fontSize: 21
                    }}
                >
                    just a more step
                </Text>
                <Image
                    source={
                        __DEV__
                            ? require("../assets/images/icons/email-copy.png")
                            : require("../assets/images/icons/email-copy.png")
                    }
                    style={{
                        width: 135,
                        height: 100
                    }}
                />
                <Text
                    style={{
                        color: "#abaed0",
                        textTransform: "uppercase",
                        textAlign: "center",
                        paddingTop: 48,
                        paddingBottom: 28,
                        fontSize: 21,
                        fontWeight: "700"
                    }}
                >
                    check your email
                </Text>
                <View style={styles.blackLine} />
                <Text
                    style={{
                        width: 285,
                        textAlign: "center",
                        color: "#abaed0",
                        paddingTop: 5,
                        marginBottom: 90
                    }}
                >
                    We've sent an email. Click the link in the email to reset your password.
                </Text>
                <View style={styles.blackLine} />
                <TouchableOpacity
                    onPress={() =>
                        props.navigation.navigate("Login")
                    }
                >
                    <LinearGradient
                        style={{
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
                        }}
                        colors={["#373843", "#2e2f39", "#24252d"]}
                        locations={[0.3, 0.5, 0.8]}
                    >
                        <Text style={styles.text}>Next</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 35
                    }}
                ></View>
            </ImageBackground>
        </View>
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
    }
});

ForgotPassword.propTypes = propTypes;

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword }, dispatch);
};
const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
