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
  const [uid, setUid] = useState("");
  const [like, setLike] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);

  const getUser = () =>
    firebase.auth().onAuthStateChanged(user => {
      setUser(user.email);
    });
  useEffect(() => getUser(), []);
  const reviewsObj = {
    reviews: review,
    authorName: user
  };

  const sendReview = () => {
    comments.push(reviewsObj);
    firebase
      .database()
      .ref("users/userId/")
      .push()
      .set(reviewsObj)
      .then(setReview(""));
  };

  const getReview = () =>
    firebase
      .database()
      .ref()
      .child("users/userId/")
      .once("value")
      .then(function(snapshot) {
        let userData = snapshot.val();
        for (let key of Object.keys(userData)) {
          setUid(Object.keys(snapshot.val()));
        }
        if (snapshot.val()) {
          setComments(Object.values(snapshot.val()));
        }
      });

  useEffect(() => {
    getReview();
  }, []);

  const deleteReview = index => comments.filter((item, i) => i !== index);
  const toggleLike = () => {
    setLike(!like);
    if (!like) {
      setTotalLikes(prevState => prevState + 1);
      debounce(sendLikeToFirebase(1), 200);
    } else {
      setTotalLikes(prevState => prevState - 1);
      debounce(sendLikeToFirebase(-1), 200);
    }
  };

  const sendLikeToFirebase = async incremental => {
    return firebase
      .database()
      .ref()
      .child("users/likes/like")
      .once("value")
      .then(snapshot => {
        if (snapshot.val() === undefined) {
        } else {
          setTotalLikes(snapshot.val());
        }
      })
      .then(
        await firebase
          .database()
          .ref("users/likes/")
          .update({
            like: totalLikes + incremental,
            authorName: user,
            song: currentSong
          })
      );
  };
  const setData = index => {
    firebase
      .database()
      .ref()
      .child("users/userId/")
      .once("value", snap => {
        let userData = [snap.val()];
        for (let key of Object.keys(userData)) {
          firebase
            .database()
            .ref()
            .child("users/userId/");
        }
      });
  };
  let songRef = firebase.database().ref("users/songs/");
  const removeCommentsFromFireBase = index =>
    firebase
      .database()
      .ref("users/userId/" + uid[index])
      .remove();
  const removeSong = () => songRef.remove();

  const [image, setImage] = useState(null);

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
        .ref()
        .child("users/images/")
        .once("value")
        .then(function(snapshot) {
            const arr = Object.values(snapshot.val());
            const data = arr.find(item => item.authorName === user);
          if (user === null) {
            firebase
              .database()
              .ref("users/images/")
               .child(user.slice(0, user.indexOf('.') ))
              .update({
                  image: result.uri,
                  authorName: user,
                  id: 1
              });
          } else {
            firebase
              .database()
              .ref("users/images")
               .child(user.slice(0, user.indexOf('.')))
              .update({
                image: result.uri,
                authorName: user,
                  id: 2
              });
          }
        });
    }
  };

  const getImageFromFireBase = async () => {
    if (image === null) {
      await firebase
        .database()
        .ref()
        .child("users/images/")
        .once("value")
        .then(function(snapshot) {
            if (snapshot.val().authorName === user) {
                setImage(snapshot.val().image);
          } else {
                setImage(userImage);
            }
        });
    }
  };

  useEffect(() => {
    getImageFromFireBase();
  }, [user]);

  return (
    <ReviewContext.Provider
      value={{
        sendReview,
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
        image
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
export default ReviewContext;

export { ReviewProvider };
