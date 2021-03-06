import React, {useContext} from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  Image,
  SafeAreaView
} from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
import PlayButtons from "../components/PlayButtons";
import AppContext from "../context/AppContext";

const loremIpsum =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ";
const totalWords = loremIpsum.split(" ").length;

const NewsRead = ({ title, text, image }) => {
  const { read, setRead } = React.useContext(AppContext);
  const readMore = () => {
      setRead("Show less")
  };
  return (
    <View style={styles.containerBeforeSlider}>
      <View style={styles.imageNewsWrapper}>
        <Image style={styles.imageNews} source={image} />
      </View>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    </View>
  );
};
const News = ({navigation}) => {
  const { data } = React.useContext(AppContext);
  const nav = () => navigation.navigate("EditProfile");

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
        <PlayButtons nav={nav}/>
        <ScrollView>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <NewsRead
                  title={item.title}
                  text={
                    totalWords > 35
                      ? loremIpsum
                          .split(" ")
                          .slice(0, +"35")
                          .join(" ")
                      : loremIpsum
                          .split(" ")
                          .slice(0)
                          .join(" ")
                  }
                  image={item.image}
                />
              )}
              keyExtractor={item => (Math.random() * 2).toString()}
              showsVerticalScrollIndicator={false}
            />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },

  imageBackground: {
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start"
  },
  imageNews: {
    alignItems: "center",
    width: vw(26),
    height: vh(12),
    borderRadius: 20
  },
  imageNewsWrapper: {
    width: vw(30),
    height: vh(12),
    borderRadius: 20,
    backgroundColor: "#1d1e25",
    borderWidth: 1,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e",
    paddingLeft: vw(4)
  },
  containerBeforeSlider: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingBottom: 10,
    borderBottomColor: "#000",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderWidth: 1
  },
  title: { color: "#abaed0", paddingLeft: 10, marginBottom: 5 },
  readMore: { color: "#8d00d0" },
  text: { color: "#fff", width: vw(50), fontSize: 9, paddingHorizontal: 10 },
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
export default News;
