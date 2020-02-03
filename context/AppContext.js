import React, { useState, useEffect, memo } from "react";
import firebase from "../config/firebase";

const AppContext = React.createContext();
import { AsyncStorage } from "react-native";
import { radioPlaylist } from "../api/RadioPlaylist";

const AppProvider = ({ children }, props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState({});
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState({ start: 0, end: 9 });
  const [pickerDisplayed, setPickerDisplayed] = useState(false);
  const [typeDisplayed, setTypeDisplayed] = useState(false);
  const [pickerSelection, setPickerSelection] = useState("");
  const [typeSelection, setTypeSelection] = useState("");
  const [review, setReview] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [uid, setUid] = useState("");
  const [comments, setComments] = useState({});
  const [read, setRead] = useState("Read more");
  const [switchValue, setSwitchValue] = useState(false);
  const [preparedSongs, setPreparedSongs] = useState([]);

  const handleChangeCountNext = () =>
    setCounter({ start: counter.start + 9, end: counter.end + 9 });
  const handleChangeCountPrev = () =>
    setCounter({ start: counter.start - 9, end: counter.end - 9 });
  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const nav = (props, page) => {
    try {
      if (validateEmail(email)) {
        props.navigation.navigate(page);
      } else setError(true);
    } catch (error) {}
  };

  const onSubmitEmail = e => {
    e.preventDefault();
    try {
      if (validateEmail(email)) {
        setError("");
        AsyncStorage.setItem("email", email);
      } else setError(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = async e => {
    await setEmail(e);
  };

  const handleChangePassword = async e => {
    await setPassword(e);
  };

  const handleChangeConfirmPassword = async e => {
    await setPasswordConfirm(e);
  };

  useEffect(() => {
    AsyncStorage.setItem("email", email);
    AsyncStorage.setItem("password", password);
  }, [email, password]);

  const signUp = async e => {
    if (password !== passwordConfirm) {
      setError("password must be the same");
    } else {
      e.preventDefault();
      const emailStorage = await AsyncStorage.getItem("email");
      const passwordStorage = await AsyncStorage.getItem("password");
      await firebase
        .auth()
        .createUserWithEmailAndPassword(emailStorage, passwordStorage)
        .catch(function(error) {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };


  const checkBoxIn = e => {
      setChecked({
          ...checked,
          [e.target.innerText]: !checked[e.target.innerText]
      });
    };
  const playSelected = () => {
      if(Object.keys(checked).length !== 0) {
          const checkedSongs = [checked].reduce((resultArr, item) => {
              return [
                  ...resultArr,
                  Object.keys(item).reduce(
                      (resultObject, value) =>
                          item[value] === true
                              ? { ...resultObject, [value]: item[value] }
                              : resultObject,
                      {}
                  )
              ];
          }, []);
          setPreparedSongs([
              ...checkedSongs
                  .map(song => Object.keys(song))
                  .join("")
                  .split(",")
                  .map(item => data.filter(song => song.title === item))
                  .flat(1)
          ]);
          console.log(checkedSongs);
      }
  }

  // const loadData = async () => {
  //   try {
  //     fetch("https://genius.p.rapidapi.com/artists/16775/songs", {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": "genius.p.rapidapi.com",
  //         "x-rapidapi-key": "309479cf94mshb9bec2e785880d9p149c01jsn2e869001ab9f"
  //       }
  //     })
  //       .then(response => response.json())
  //       .then(json => setData(json.response.songs));
  //   } catch (error) {
  //   } finally {
  //   }
  // };
  const loadData = async () => {
    setData(radioPlaylist);
  };
  const togglePicker = () => {
    setPickerDisplayed(!pickerDisplayed);
  };
  const toggleType = () => {
    setTypeDisplayed(!typeDisplayed);
  };
  const setPickerValue = newValue => {
    setPickerSelection(newValue);
    togglePicker();
  };
  const setTypeValue = newValue => {
    setTypeSelection(newValue);
    toggleType();
  };

  const sendReview = () =>
    firebase
      .database()
      .ref("user/userId/")
      .push()
      .set({
        reviews: review,
        authorName: authorName
      })
      .then(setReview(""));

  const getReview = () =>
    firebase
      .database()
      .ref()
      .child("user/userId/")
      .once("value")
      .then(function(snapshot) {
        const obj = snapshot.val();
        const newArr = [];
        for (let i in obj) {
          newArr.push({ review: obj[i].reviews });
          setUid(i);
        }
        return newArr;
      });
  const loadDataReview = async () => {
    const data = await getReview();
    setComments(data);
  };
  useEffect(() => {
    loadData();
  }, [comments]);

  let userRef = firebase.database().ref("user/userId/" + uid);
  const remove = () => userRef.remove();

  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
  };

  return (
    <AppContext.Provider
      value={{
        onSubmitEmail,
        handleChange,
        handleChangePassword,
        handleChangeConfirmPassword,
        signUp,
        nav,
        checkBoxIn,
        loadData,
        handleChangeCountNext,
        handleChangeCountPrev,
        togglePicker,
        setPickerValue,
        setTypeValue,
        toggleType,
        sendReview,
        loadDataReview,
        remove,
        toggleSwitch,
          playSelected,
        setFilter,
        email,
        error,
        password,
        passwordConfirm,
        checked,
        filter,
        data,
        counter,
        pickerDisplayed,
        pickerSelection,
        typeSelection,
        typeDisplayed,
        setReview,
        review,
        comments,
        read,
        setRead,
        preparedSongs,
        switchValue
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;

export { AppProvider };
