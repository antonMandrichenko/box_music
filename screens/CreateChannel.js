import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { vw } from "react-native-expo-viewport-units";
import AppContext from "../context/AppContext";

const CreateChannel = props => {
  const {
    pickerDisplayed,
    setPickerValue,
    togglePicker,
    pickerSelection,
    data,
    setTypeValue,
    typeSelection,
    typeDisplayed,
    toggleType
  } = useContext(AppContext);

  const dataType = [
    {
      value: "Electronic Dance Music"
    },
    {
      value: "Rock Music"
    },
    {
      value: "Jazz"
    },
    {
      value: "Dubstep"
    },
    {
      value: "Rhythm and Blues"
    },
    {
      value: "Techno"
    },
    {
      value: "Country Music"
    },
    {
      value: "Electro"
    },
    {
      value: "Indie Rock"
    },
    {
      value: "Pop Music"
    }
  ];

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
        <View style={styles.headerContainer}>
          <Text style={styles.textTitle}>create your own channel</Text>
          <LinearGradient
            colors={[
              "rgba(151,232,243,1)",
              "rgba(50,149,182,1)",
              "rgba(204,63,223,1)",
              "rgba(255,127,136,1)"
            ]}
            style={styles.circle}
            locations={[0, 0.2, 0.8, 1]}
          >
            <View style={styles.circleInner}>
              <Image
                source={
                  __DEV__
                    ? require("../assets/images/plus.png")
                    : require("../assets/images/plus.png")
                }
                style={styles.circleInnerImage}
              />
            </View>
          </LinearGradient>
          <Text style={styles.textAdditional}>Choose your Album Cover</Text>
          <View style={styles.blackLine} />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.selectWrapper}>
            <LinearGradient
              colors={["#08080a", "#1d1e25"]}
              style={styles.inputWrapperShort}
              locations={[0.05, 1]}
            >
              <TextInput
                style={styles.inputShort}
                placeholder="Choose Category"
                placeholderTextColor="#abaed0"
                value={pickerSelection}
              />
            </LinearGradient>
            <View>
              <TouchableNativeFeedback
                onPress={togglePicker}
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

              <Modal
                visible={pickerDisplayed}
                animationType={"slide"}
                transparent={true}
              >
                <View style={styles.modalWindow}>
                  {data.map((value, index) => {
                    return (
                      <TouchableHighlight
                        key={index}
                        onPress={() =>
                          setPickerValue(value.primary_artist.url.slice(27))
                        }
                        style={{ paddingTop: 4, paddingBottom: 4 }}
                      >
                        <Text style={styles.modalText}>
                          {value.primary_artist.url.slice(27)}
                        </Text>
                      </TouchableHighlight>
                    );
                  })}

                  <TouchableHighlight
                    onPress={toggleType}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <Text style={styles.modalTextCancel}>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </Modal>
            </View>
          </View>
          <LinearGradient
            colors={["#08080a", "#1d1e25"]}
            style={styles.inputWrapperLong}
            locations={[0.05, 1]}
          >
            <TextInput
              style={styles.inputLong}
              placeholder="Add Album Title"
              placeholderTextColor="#abaed0"
            />
          </LinearGradient>
          <View style={styles.selectWrapper}>
            <LinearGradient
              colors={["#08080a", "#1d1e25"]}
              style={styles.inputWrapperShort}
              locations={[0.05, 1]}
            >
              <TextInput
                style={styles.inputShort}
                placeholder="Choose Category"
                placeholderTextColor="#abaed0"
                value={typeSelection}
              />
            </LinearGradient>
            <View>
              <TouchableNativeFeedback
                onPress={toggleType}
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

              <Modal
                visible={typeDisplayed}
                animationType={"slide"}
                transparent={true}
              >
                <View style={styles.modalWindow}>
                  {dataType.map((value, index) => {
                    return (
                      <TouchableHighlight
                        key={index}
                        onPress={() => setTypeValue(value.value)}
                        style={{ paddingTop: 4, paddingBottom: 4 }}
                      >
                        <Text style={styles.modalText}>{value.value}</Text>
                      </TouchableHighlight>
                    );
                  })}

                  <TouchableHighlight
                    onPress={togglePicker}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <Text style={styles.modalTextCancel}>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </Modal>
            </View>
          </View>
          <LinearGradient
            colors={["#08080a", "#1d1e25"]}
            style={styles.inputWrapperLong}
            locations={[0.05, 1]}
          >
            <TextInput
              style={styles.inputLong}
              placeholder="Music Type"
              placeholderTextColor="#abaed0"
            />
          </LinearGradient>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.blackLine} />
          <TouchableOpacity onPress={() => true}>
            <LinearGradient
              style={styles.button}
              colors={["#373843", "#2e2f39", "#24252d"]}
              locations={[0.3, 0.5, 0.8]}
            >
              <Text style={styles.text}>Create My Channel</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
  textTitle: {
    color: "#abaed0",
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: 48,
    paddingBottom: 28,
    fontSize: 21,
    fontWeight: "700"
  },
  textAdditional: {
    color: "#abaed0",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 16,
    fontWeight: "500"
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
    width: vw(80),
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
    width: 185,
    height: 185,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  circleInnerImage: {
    transform: [{ rotate: "45deg" }],
    width: 175,
    height: 175
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
    marginRight: 15
  },
  inputWrapperLong: {
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
    width: 300,
    marginRight: 15
  },
  inputWrapperButton: {
    flexDirection: "row"
  },
  inputShort: {
    borderWidth: 0,
    height: 39,
    color: "#abaed0",
    paddingLeft: 15,
    width: 240
  },
  inputLong: {
    borderWidth: 0,
    height: 39,
    color: "#abaed0",
    paddingLeft: 15,
    width: 300
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
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#abaed0",
    transform: [{ rotate: "180deg" }]
  },

  selectWrapper: {
    flexDirection: "row"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  headerContainer: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  mainContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 4
  },
  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2
  },
  modalWindow: {
    borderWidth: 1,
    backgroundColor: "rgba(0,0,0, .8)",
    borderColor: "#202024",
    borderRadius: 3,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",

    position: "absolute"
  },
  modalText: {
    color: "#abaed0",
    padding: 10,
    fontSize: 16,
    width: "100%"
  },
  modalTextCancel: {
    color: "#abaed0",
    padding: 20,
    fontSize: 24,
    borderRadius: 3,
    borderColor: "#abaed0"
  }
});

export default CreateChannel;
