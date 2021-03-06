import React from "react";
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput
} from "react-native";
import send from "../assets/images/icons/send.png";
import { vw } from "react-native-expo-viewport-units";
import { LinearGradient } from "expo-linear-gradient";
import ReviewContext from "../context/ReviewContext";

const AddComment = () => {
  const { review, setReview, sendComments, image } = React.useContext(
    ReviewContext
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.imageReview} source={{ uri: image }} />
      </View>
      <View style={styles.container}>
        <LinearGradient
          colors={["#08080a", "#1d1e25"]}
          style={styles.inputWrapper}
          locations={[0.05, 1]}
        >
          <TextInput
            style={styles.input}
            onChangeText={setReview}
            value={review}
            placeholder="Add your comment..."
            placeholderTextColor="#abaed0"
          />
        </LinearGradient>
        <TouchableOpacity style={styles.flex} onPress={sendComments}>
          <LinearGradient
            style={styles.inputChannelButton}
            colors={["#373843", "#2e2f39", "#24252d"]}
            locations={[0.3, 0.5, 0.8]}
          >
            <Image style={styles.iconReview} source={send} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: vw(90),
    paddingBottom: 50
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imageReview: {
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 5,
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
  input: {
    borderWidth: 0,
    height: 39,
    width: vw(65),
    color: "#abaed0",
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  inputChannelButton: {
    height: 39,
    width: vw(12),
    marginLeft: 9,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e"
  }
});
export default AddComment;
