import React, {useContext, useEffect, useState} from "react";
import {
  BackHandler,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import firebase from "../config/firebase";
import { LinearGradient } from "expo-linear-gradient";
import CheckboxComponent from "../components/CheckboxComponent";
import Channel from "../components/Channel";
import Button from "../components/Button";
import AppContext from "../context/AppContext";

function ChooseChannel(props) {

  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(true);
  const [data, setData] = useState('');
  const [error, setError] = useState('');
    const loadData =  async () => {
        try {
            fetch("https://genius.p.rapidapi.com/artists/16775/songs", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "genius.p.rapidapi.com",
                    "x-rapidapi-key": "309479cf94mshb9bec2e785880d9p149c01jsn2e869001ab9f"
                }
            })
                .then(response => response.json())
                .then(json => setData(json.response.songs))
        } catch (error) {
            console.log('error')
        } finally {
            // setLoadingData(false)
        }

    }
    useEffect(() => {
        loadData();
    }, []);
    let test;
    if (data) {
        test = data.map(song => ({
            ...song,
            img: song['header_image_thumbnail_url'],
            title: song.title,
        }));
    };
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{
          height: "100%",
          width: "100%",
          paddingTop: 23,
          paddingBottom: 23,
          paddingRight: 14,
          paddingLeft: 14
        }}
        colors={["#396276", "#4a4160", "#603b66"]}
        locations={[0.3, 0.5, 0.8]}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            textTransform: "uppercase"
          }}
        >
          choose your favorite
        </Text>
        <Text
          style={{
            fontSize: 48,
            color: "#fff",
            textTransform: "uppercase"
          }}
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
            secureTextEntry={true}
            style={styles.input}
            value={search}
            placeholder="search your favorite channel..."
            placeholderTextColor="#abaed0"
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
              style={{
                width: 12,
                height: 12
              }}
            />
          </LinearGradient>
        </LinearGradient>

        <View style={styles.channelContainer}>
          <Channel styles={styles} data={test} />
          {/*<Channel styles={styles} data={data} />*/}
          {/*<Channel styles={styles} data={data} />*/}
          {/*<Channel styles={styles} data={data} />*/}
          {/*<Channel styles={styles} data={data} />*/}
          {/*<Channel styles={styles} data={data} />*/}
          {/*<Channel styles={styles} data={data} />*/}
          {/*<Channel styles={styles} data={data} />*/}
          {/*<Channel styles={styles} data={data} />*/}
        </View>

        <View  style={styles.channelContainer}>
          <TouchableOpacity onPress={() => console.log('w1')}>
            <LinearGradient
                style={{
                  height: 39,
                    width: 260,
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
              <Text style={styles.text}>play selected</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('w2')}>
            <LinearGradient
                style={{
                  height: 39,
                  width: 39,
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
              <Text style={styles.text}>
                  <View style={styles.triangleLeft} />
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('w3')}>
            <LinearGradient
                style={{
                  height: 39,
                  width: 39,
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
              <Text style={styles.text}><View style={styles.triangleRight} /></Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Button styles={styles} title="create your own channel" handleChange={() => console.log('w')}/>
        <TouchableOpacity
          onPress={() =>
            firebase
              .auth()
              .signOut()
              .then(function() {
                props.navigation.navigate("Login");
              })
              .catch(function(error) {
                // An error happened.
              })
          }
        >
          <Text>sign out</Text>
        </TouchableOpacity>
      </LinearGradient>
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
  blackLine: {
    width: 23,
    height: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#08080a",
    borderColor: "#202024",
    borderRadius: 3,
    marginBottom: 18,
    marginTop: 10
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#202024",
    height: 37,
    width: "100%",
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
    width: 105,
    marginBottom: 20
  },
  circle: {
    width: 105,
    height: 105,
    borderRadius: 50,
    borderColor: "#1f1a26",
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  circleInner: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    width: 95,
    height: 95,
    borderRadius: 50,
    borderColor: "#5a5ae3",
    borderWidth: 4
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  checkboxCircle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 50,
    zIndex: 1
  },
  checkboxInner: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
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
    triangleLeft: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#abaed0',
        transform: [
            {rotate: '-90deg'}
        ]
    },
    triangleRight: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#abaed0',
        transform: [
            {rotate: '90deg'}
        ]
    }
};
export default ChooseChannel;
