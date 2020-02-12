import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";
import uuid from 'react-uuid'

const ReviewContext = React.createContext();

const ReviewProvider = ({children}) => {
    const [review, setReview] = useState("");
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState("");
    const [currentSong, setCurrentSong] = useState("");
    const [like, setLike] = useState(0);

    firebase.auth().onAuthStateChanged(user => setUser(user.email || "anonymous" ));

    const reviewsObj = {
        reviews: review,
        authorName: user,
        uid: uuid()
    };

    const sendReview = () => {
        comments.push(reviewsObj);
        firebase
            .database()
            .ref("user/userId/")
            .push()
            .set(reviewsObj)
            .then(setReview(""));
    };

    const getReview = () =>
        firebase
            .database()
            .ref()
            .child("user/userId/")
            .once("value")
            .then(function(snapshot) {
                if(snapshot.val()) {
                    setComments(Object.values(snapshot.val()));
                }
            });

    useEffect(() => { getReview();}, []);
    const deleteReview = (index) => comments.filter((item, i) => i !== index);
    const sendLike = async () => {
        await setLike(prevState => prevState + 1)
        firebase
            .database()
            .ref("user/likes/")
            .push()
            .set({
                like: like,
                authorName: "anonymous" || user,
                song: currentSong
            })
    }

    let userRef = firebase.database().ref("user/userId/");
    let songRef = firebase.database().ref("songs/");
    const remove = () => userRef.remove();
    const removeSong = () => songRef.remove();
    return (
        <ReviewContext.Provider
            value={{
                sendReview,
                remove,
                removeSong,
                deleteReview,
                setReview,
                comments,
                setComments,
                setCurrentSong,
                review
            }}
        >
            {children}
        </ReviewContext.Provider>
    );
};
export default ReviewContext;

export { ReviewProvider };
