import React, {useContext, useEffect, useState} from "react";
import { vw } from "react-native-expo-viewport-units";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import firebase from "../config/firebase";
import { LinearGradient } from "expo-linear-gradient";
import Channel from "../components/Channel";
import Button from "../components/Button";
import AppContext from "../context/AppContext";

const ChooseChannel = (props) => {
  const [data, setData] = useState([]);
  const {setFilter, filter} = useContext(AppContext);
  const loadData = async () => {
    try {
      fetch("https://genius.p.rapidapi.com/artists/16775/songs", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "genius.p.rapidapi.com",
          "x-rapidapi-key": "309479cf94mshb9bec2e785880d9p149c01jsn2e869001ab9f"
        }
      })
        .then(response => response.json())
        .then(json => setData(json.response.songs));
    } catch (error) {
    } finally {
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.containerWrapper}
        colors={["#396276", "#4a4160", "#603b66"]}
        locations={[0.3, 0.5, 0.8]}
      >
        <Text
          style={styles.textTitle}
        >
          choose your favorite
        </Text>
        <Text
          style={styles.textMain}
        >
          channels
        </Text>
        <View style={styles.blackLine} />
        <LinearGradient
          colors={["#08080a", "#1d1e25"]}
          style={styles.inputWrapper}
          locations={[0.05, 1]}
        >
          <TextInput
            style={styles.input}
            value={filter}
            placeholder="search your favorite channel..."
            placeholderTextColor="#abaed0"
            onChange={(e) => setFilter(e.target.value)}
          />
          <LinearGradient
            colors={["#363743", "#25252e"]}
            style={styles.searchButton}
            locations={[0.05, 1]}
          >
            <ImageBackground
              source={
                __DEV__
                  ? require("../assets/images/icons/search.png")
                  : require("../assets/images/icons/search.png")
              }
              style={styles.searchIcon}
            />
          </LinearGradient>
        </LinearGradient>

        <View style={styles.channelContainer}>
          <Channel styles={styles} data={data} />
        </View>

        <View style={styles.channelContainer}>
          <TouchableOpacity
              onPress={() => true}
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
              onPress={() => true}
          >
            <LinearGradient
              style={styles.inputChannelButton}
              colors={["#373843", "#2e2f39", "#24252d"]}
              locations={[0.3, 0.5, 0.8]}
            >
              <View>
                <Text style={styles.triangleLeft} />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => true}>
            <LinearGradient
                style={styles.inputChannelButton}
              colors={["#373843", "#2e2f39", "#24252d"]}
              locations={[0.3, 0.5, 0.8]}
            >
              <View>
                <Text style={styles.triangleRight} />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Button
          styles={styles}
          title="create your own channel"
          handleChange={() => true}
        />
        <TouchableOpacity
          onPress={() =>
            firebase
              .auth()
              .signOut()
              .then(function() {
                props.navigation.navigate("Login");
              })
              .catch(function(error) {})
          }
        >
          <Text>sign out</Text>
        </TouchableOpacity>
      </LinearGradient>
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
  searchIcon: {
    width: 12,
    height: 12
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
    marginBottom: 10,
    borderRadius: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#202024",
    height: 37,
    width: 300,
    color: "#abaed0",
    paddingLeft: 10,
    borderRadius: 5
  },
  searchButton: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: "#202024",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  circleWrapper: {
    display: "flex",
    width: 85,
    marginBottom: 10
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: "#1f1a26",
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  circleInner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  channelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "flex-start",
    flexWrap: "wrap"
  },
  text: {
    color: "#abaed0",
    textShadowColor: "#272730",
    textShadowOffset: { width: 1, height: 2 },
    fontSize: 12,
    textTransform: "uppercase"
  },
  triangle: {
    color: "#abaed0",
    textShadowColor: "#272730",
    textShadowOffset: { width: 1, height: 2 },
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
    transform: [{ rotate: "-90deg" }]
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
    transform: [{ rotate: "90deg" }]
  }
});

export default ChooseChannel;
