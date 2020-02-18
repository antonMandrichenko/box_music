import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";
import { debounce } from "../constants/Layout";
import * as ImagePicker from "expo-image-picker";
import userImage from "../assets/images/user.png";
import { Platform } from "react-native";
const ReviewContext = React.createContext();

const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState("");
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState("");
  const [currentSong, setCurrentSong] = useState("");
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(0);
  const [totalLikes, setTotalLikes] = useState(0);
  const [image, setImage] = useState(null);

  const getUser = async () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userEmail = user.email;
        setUser(userEmail);
      } else {
        console.log("user not found");
      }
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  const reviewsObj = {
    reviews: review,
    authorName: user,
    id: comments.length + 1,
    image: image
  };

  const sendComments = () => {
    comments.push(reviewsObj);
    firebase
      .database()
      .ref("users/comments/")
      .child(user.slice(0, user.indexOf(".")))
      .child(comments.length)
      .set(reviewsObj)
      .then(setReview(""));
  };

  const getComments = () =>
    firebase
      .database()
      .ref("users/comments/")
      // .child(user.slice(0, user.indexOf(".")))
      .once("value")
      .then(function(snapshot) {
        if (snapshot.val()) {
          const m = Object.assign(Object.values(snapshot.val()));
          const obj = m.map(item => Object.values(item));
          const arr = obj.flat(2);
          setComments(arr);
        }
      });

  const countALlLikes = () => {
    firebase
      .database()
      .ref("users")
      .child("likes")
      .once("value")
      .then(function(snapshot) {
        const obj = snapshot.val();
        const val = Object.values(obj).map(item => item.like);
        const result = val.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        );
        setTotalLikes(result);
      });
  };
  useEffect(() => {
    countALlLikes();
  }, [likes]);

  useEffect(() => {
    getComments();
  }, []);
  const deleteReview = index => comments.filter((item, i) => i !== index);
  const toggleLike = () => {
    setLike(!like);
    if (!like) {
      setLikes(prevState => prevState + 1);
      debounce(sendLikeToFirebase(1), 200);
    } else {
      setLikes(prevState => prevState - 1);
      debounce(sendLikeToFirebase(-1), 200);
    }
  };

  const sendLikeToFirebase = async incremental => {
    return firebase
      .database()
      .ref("users/likes/")
      .child(user.slice(0, user.indexOf(".")))
      .set({
        like: likes + incremental,
        authorName: user,
        song: currentSong
      });
  };
  const setData = index => {
    firebase
      .database()
      .ref()
      .child("users/comments/")
      .once("value", snap => {
        let userData = [snap.val()];
        for (let key of Object.keys(userData)) {
          firebase
            .database()
            .ref()
            .child("users/comments/");
        }
      });
  };
  let songRef = firebase.database().ref("users/playlists/");
  const removeCommentsFromFireBase = id => {
    firebase
      .database()
      .ref("users/comments/")
      .child(user.slice(0, user.indexOf(".")))
      .child(id)
      .remove();
  };

  const removeSong = () => songRef.remove();

  React.useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result.uri);
      await firebase
        .database()
        .ref("users/comments/")
        .child(user.slice(0, user.indexOf(".")))
        .once("value")
        .then(function(snapshot) {
          if (user === null) {
            firebase
              .database()
              .ref("users/images/")
              .child(user.slice(0, user.indexOf(".")))
              .update({
                image: result.uri,
                authorName: user,
                test: 1
              });
          } else {
            firebase
              .database()
              .ref("users/images")
              .child(user.slice(0, user.indexOf(".")))
              .update({
                image: result.uri,
                authorName: user,
                test: 2
              });
          }
        });
    }
  };

  const getImageFromFireBase = async () => {
    if (user) {
      await firebase
        .database()
        .ref("users/images/")
        .child(user.slice(0, user.indexOf(".")))
        .once("value")
        .then(function(snapshot) {
          if (snapshot.val() === null) {
            setImage(userImage);
          } else if (snapshot.val().image === "") {
            setImage(userImage);
          } else if (user === snapshot.val().authorName) {
            setImage(snapshot.val().image);
          }
        });
    } else {
      setImage(userImage);
    }
  };

  useEffect(() => {
    getImageFromFireBase();
  }, [user]);

  return (
    <ReviewContext.Provider
      value={{
        sendComments,
        removeCommentsFromFireBase,
        removeSong,
        deleteReview,
        setData,
        toggleLike,
        pickImage,
        setReview,
        comments,
        setComments,
        setCurrentSong,
        review,
        totalLikes,
        like,
        image,
        user
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
export default ReviewContext;

export { ReviewProvider };
