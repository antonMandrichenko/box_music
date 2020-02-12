import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";

const ReviewContext = React.createContext();

const ReviewProvider = ({children}) => {
    const [review, setReview] = useState("");
    const [comments, setComments] = useState({});
    const [user, setUser] = useState("");
    const [currentSong, setCurrentSong] = useState("");
    const [like, setLike] = useState(0);

    firebase.auth().onAuthStateChanged(user => setUser("anonymous" || user.email));

    const sendReview = () =>
        firebase
            .database()
            .ref("user/userId/")
            .push()
            .set({
                reviews: review,
                authorName: user
            })
            .then(setReview(""));

    const getReview = () =>
        firebase
            .database()
            .ref()
            .child("user/userId/")
            .once("value")
            .then(function(snapshot) {
                setComments(Object.values(snapshot.val() ));
            });
    useEffect(() => { getReview()}, [])
    const sendLike = async () => {
        await setLike(like + 1)
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
                comments,
                setComments,
                setCurrentSong,
            }}
        >
            {children}
        </ReviewContext.Provider>
    );
};
export default ReviewContext;

export { ReviewProvider };
