import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import triangleBottom from "../assets/images/icons/triangleBottom.png";
import answer from "../assets/images/icons/answer.png";
import cancel from "../assets/images/icons/cancel.png";
import { vw } from "react-native-expo-viewport-units";
import ReviewContext from "../context/ReviewContext";

const MessageAnswer = props => {
  const {
    comments,
    removeCommentsFromFireBase,
    deleteReview,
    setComments,
    setData,
    user
  } = React.useContext(ReviewContext);

  return (
    <>
      {comments.map((comment, index) => {
        return (
          <View style={styles.wrapper} key={Math.random() * 2}>
            <View style={styles.container}>
              <View style={styles.lineBefore} />
              <Image style={styles.image} source={{ uri: comment.image }} />
              <View>
                <Text style={styles.text}>Adam Lambert</Text>
                <View style={styles.textAnswerWrapper}>
                  <Text style={styles.textAnswer}>{comment.reviews}</Text>
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.flex}>
                <Text style={styles.textReplies}>1 Replies</Text>
                <Image style={styles.triangleBottom} source={triangleBottom} />
              </TouchableOpacity>
              <View style={styles.line} />
              <TouchableOpacity style={styles.flex}>
                <Image style={styles.iconReview} source={answer} />
              </TouchableOpacity>

              { user ===
                comment.authorName && (
                <TouchableOpacity
                  style={styles.flex}
                  onPress={() => {
                    setData(index);
                    setComments(deleteReview(index));
                    removeCommentsFromFireBase(comment.id);
                  }}
                >
                  <Image style={styles.iconReview} source={cancel} />
                </TouchableOpacity>
                  )}
            </View>
          </View>
        );
      })}
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
  textAnswer: {
    color: "#fff",
    fontSize: 12,
    width: vw(35),
    textAlign: "justify"
  },
  textAnswerWrapper: { flex: 1, flexDirection: "row", flexWrap: "wrap" },
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
