import React, {useEffect} from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import user from "../assets/images/user.jpg";
import triangleBottom from "../assets/images/icons/triangleBottom.png";
import answer from "../assets/images/icons/answer.png";
import cancel from "../assets/images/icons/cancel.png";
import { vw } from "react-native-expo-viewport-units";
import AppContext from "../context/AppContext";

const MessageAnswer = props => {
  const { comments, remove } = React.useContext(AppContext);

  return (
    <>
      {comments && comments.map(comment => (
        <View style={styles.wrapper} key={Math.random() * 2}>
          <View style={styles.container}>
            <View style={styles.lineBefore}/>
            <Image style={styles.image} source={user} />
            <View>
            <Text style={styles.text}>Adam Lambert</Text>
            <Text style={styles.textAnswer}>{comment.review}</Text>
            </View>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.flex}
            >
              <Text style={styles.textReplies}>1 Replies</Text>
              <Image style={styles.triangleBottom} source={triangleBottom} />
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              style={styles.flex}
            >
              <Image style={styles.iconReview} source={answer} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.flex}
                onPress={remove}
            >
              <Image style={styles.iconReview} source={cancel} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: vw(90),
    marginBottom: 10
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  image: {
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 5
  },
  text: { color: "#abaed0", fontSize: 14 },
  textAnswer: { color: "#fff", fontSize: 12 },
  textComment: { color: "#abaed0", fontSize: 14 },
  textReplies: { color: "#e75f92", fontSize: 12 },
  line: {
    marginHorizontal: 6,
    height: 10,
    width: 1,
    backgroundColor: "#4c47cb"
  },
  triangleBottom: {
    width: 12,
    height: 12,
    marginLeft: 10
  },
  iconReview: {
    width: 15,
    height: 12
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  lineBefore: {
    width: 20,
    height: 1,
    backgroundColor: "#4c47cb",
    marginRight: 10
  }
});
export default MessageAnswer;
