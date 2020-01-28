import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import user from "../assets/images/user.jpg";
import triangleBottom from "../assets/images/icons/triangleBottom.png";
import answer from "../assets/images/icons/answer.png";
import { vw } from "react-native-expo-viewport-units";
import MessageAnswer from "./MessageAnswer";
import AddComment from "./AddComment";
import AppContext from "../context/AppContext";

const MessageBoard = () => {
  const [show, setShow] = React.useState(false);
  const [showReview, setShowReview] = React.useState(false);
  const { comments } = React.useContext(AppContext);

  const toggleAnswer = () => setShow(!show);
  const toggleReview = () => setShowReview(!showReview);
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Image style={styles.image} source={user} />
          <Text style={styles.text}>Adam Lambert</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.flex} onPress={toggleAnswer}>
            <Text style={styles.textReplies}>151 Replies</Text>
            <Image
              style={show ? styles.triangleTop : styles.triangleBottom}
              source={triangleBottom}
            />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            style={styles.flex}
            onPress={toggleReview}
          >
            <Image style={styles.iconReview} source={answer} />
          </TouchableOpacity>
        </View>
      </View>
      {comments && show && <MessageAnswer />}
      {showReview && <AddComment />}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: vw(90),
    borderBottomWidth: 1,
    borderColor: "#1d1e25",
    paddingVertical: 10,
    marginBottom: 10
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  image: {
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 5
  },
  text: { color: "#abaed0", fontSize: 14 },
  textReplies: { color: "#e75f92", fontSize: 12 },
  line: {
    marginHorizontal: 6,
    height: 10,
    width: 1,
    backgroundColor: "#4c47cb"
  },
  triangleBottom: {
    width: 15,
    height: 15,
    marginLeft: 10
  },
  triangleTop: {
    width: 15,
    height: 15,
    marginLeft: 10,
    transform: [{ rotate: "180deg" }]
  },
  iconReview: {
    width: 17,
    height: 15
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default MessageBoard;
