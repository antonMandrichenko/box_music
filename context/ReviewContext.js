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

  const reviewsObj = {
    reviews: review,
    authorName: user,
    id: (comments.length + 1).toString()
  };

  const sendComments = () => {
    setComments([...comments, { image, ...reviewsObj }]);
    firebase
      .database()
      .ref("users/comments/")
      .child(user.slice(0, user.indexOf(".")))
      .child((comments.length + 1).toString())
      .set(reviewsObj)
      .then(setReview(""));
  };

  const getComments = () =>
    firebase
      .database()
      .ref("users/comments/")
      .once("value")
      .then(function(snapshot) {
        if (snapshot.val()) {
          const keys = Object.keys(snapshot.val());
          const reviews = keys
            .reduce((result, key) => {
              const snapKey = snapshot.val()[key];
              return [
                ...result,
                Object.keys(snapKey).reduce(
                  (acc, keyReview) =>
                    keyReview !== "image"
                      ? [
                          ...acc,
                          {
                            reviews: snapKey[keyReview].reviews,
                            image: snapKey.image,
                            authorName: snapKey[keyReview].authorName
                          }
                        ]
                      : acc,
                  []
                )
              ];
            }, [])
            .flat(1);
          setComments(reviews);
        }
      });

  const countALlLikes = () => {
    firebase
      .database()
      .ref("users")
      .child("likes")
      .once("value")
      .then(function(snapshot) {
          if(+snapshot.val() > 0) {
              const obj = snapshot.val();
              const val = Object.values(obj).map(item => item.like);
              const result = val.reduce(
                  (previousValue, currentValue) => previousValue + currentValue
              );
              setTotalLikes(result);
          }
      })
        .then(
         firebase
        .database()
        .ref("users")
        .child("totalLikes")
        .update({likes: totalLikes})
        );
  };

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
      firebase
        .database()
        .ref()
        .child("users/comments/")
        .child(user.slice(0, user.indexOf(".")))
        .update({ image: result.uri });
    }
  };

  const getImageFromFireBase = async () => {
    if (user) {
      firebase
        .database()
        .ref()
        .child("users/comments/")
        .child(user.slice(0, user.indexOf(".")))
        .once("value")
        .then(function(snapshot) {
            if(snapshot.val()){
                setImage(snapshot.val().image || userImage);

            }
        });
    }
  };

  useEffect(() => {
    getImageFromFireBase();
  }, [user, image]);
  useEffect(() => {
    countALlLikes();
  }, [likes]);

  useEffect(() => {
    getComments();
  }, [image]);

  useEffect(() => {
    getPermissionAsync();
  }, []);
  useEffect(() => {
    getUser();
  }, []);
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
