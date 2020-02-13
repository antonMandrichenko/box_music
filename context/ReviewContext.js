import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";
import {debounce} from "../constants/Layout";

const db = firebase.firestore();
const ReviewContext = React.createContext();

const log = console.log;
const ReviewProvider = ({children}) => {
    const [review, setReview] = useState("");
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState("");
    const [currentSong, setCurrentSong] = useState("");
    const [uid, setUid] = useState("");
    const [like, setLike] = useState(false);
    const [totalLikes, setTotalLikes] = useState(0);

    // firebase.auth().onAuthStateChanged(user => {if(user !== null) {setUser(user.email)}});

    const reviewsObj = {
        reviews: review,
        authorName: user,
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
                let userData = snapshot.val();
                for (let key of Object.keys(userData)) {
                    setUid(Object.keys(snapshot.val()))
                }
                if(snapshot.val()) {
                    setComments(Object.values(snapshot.val()));
                }
            });
    const removeData = (index) => {
        firebase.database().ref().child('user/userId/').once('value', snap => {
            let userData = [snap.val()];
            for (let key of Object.keys(userData)) {
                firebase.database().ref().child('user/userId/'+uid[index])
                    // .child(key).remove();
            }
        });
    }
    useEffect(() => { getReview();}, []);

    const deleteReview = (index) => comments.filter((item, i) => i !== index);
    const toggleLike =  () => {
        setLike(!like);
        if(!like) {
            setTotalLikes(prevState => prevState + 1);
            debounce(sendLikeToFirebase(1), 200)
        } else {
            setTotalLikes(prevState => prevState - 1);
            debounce(sendLikeToFirebase(-1), 200)
        }
    };

        const sendLikeToFirebase = async (incremental) => {
        return  firebase.database()
            .ref()
            .child("user/likes/like")
            .once("value").then((snapshot) => setTotalLikes(snapshot.val()))
            .then(
                 await firebase
                     .database()
                     .ref("user/likes/")
                     .update({
                         like: totalLikes + incremental,
                         authorName: user,
                         song: currentSong
                     })
            )

                }

    let userRef = firebase.database().ref("user/userId/" + uid[0]);
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
                removeData,
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
