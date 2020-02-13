import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";
import { debounce } from "../constants/Layout";

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
      if (user !== null) {
        setUser(user.email);
      }
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
        console.log(snap.val());
        for (let key of Object.keys(userData)) {
          firebase
            .database()
            .ref()
            .child("users/userId/" );
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
  return (
    <ReviewContext.Provider
      value={{
        sendReview,
        removeCommentsFromFireBase,
        removeSong,
        deleteReview,
        setData,
        toggleLike,
        setReview,
        comments,
        setComments,
        setCurrentSong,
        review,
        totalLikes,
        like
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
export default ReviewContext;

export { ReviewProvider };
