import React, { useState, useEffect } from "react";
import firebase from "../config/firebase";
import { AsyncStorage, Platform, InteractionManager } from "react-native";
import { radioPlaylist } from "../api/RadioPlaylist";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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
  const [songs, setSongs] = useState([]);
  const [read, setRead] = useState("Read more");
  const [switchValue, setSwitchValue] = useState(false);
  const [switchPlan, setSwitchPlan] = useState(true);
  const [preparedSongs, setPreparedSongs] = useState([]);
  const carouselRef = React.useRef(null);
  const [user, setUser] = useState("");

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

  const signUp = async (e, nav) => {
    if (password !== passwordConfirm) {
      setError("password must be the same");
      return;
    } else if (password === passwordConfirm) {
      e.preventDefault();
      const emailStorage = await AsyncStorage.getItem("email");
      const passwordStorage = await AsyncStorage.getItem("password");
      await firebase
        .auth()
        .createUserWithEmailAndPassword(emailStorage, passwordStorage)
        .then(
          firebase
            .database()
            .ref("users/images/")
            .child(user.slice(0, user.indexOf(".")))
            .update({
              authorName: user.slice(0, user.indexOf("."))
            })
        )
          .then(nav.navigate('ChooseChannel'))
        .catch(function(error) {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };

  const checkBoxIn = title => {
    setChecked({
      ...checked,
      [title]: !checked[title]
    });
  };
  const getUser = async () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userEmail = user.email;
        setUser(userEmail);
      }
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  const setDataFirebase = () => {
    if (user) {
      firebase
        .database()
        .ref("users/playlists/")
        .child(user.slice(0, user.indexOf(".")))
        .push()
        .set(preparedSongs);
    }
  };

  const getDataFirebase = () => {
    firebase
      .database()
      .ref()
      .child("users/playlists/")
      .once("value")
      .then(function(snapshot) {
        if (snapshot.val() !== null) {
          setSongs(Object.values(snapshot.val()));
        }
      });
  };
  useEffect(() => {
    getDataFirebase();
  }, []);
  const playSelected = () => {
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
  };

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

  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    if (Object.keys(checked).length !== 0) {
      setDataFirebase();
    }
  }, [preparedSongs]);

  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
  };
  const toggleSwitchPlan = () => {
    setSwitchPlan(!switchPlan);
  };
  const goForward = () => {
    setTimeout(() => carouselRef.current.snapToNext(), 250);
  };
  const goBack = () => {
    setTimeout(() => carouselRef.current.snapToPrev(), 250);
  };
  const _setTimeout = global.setTimeout;
  const _clearTimeout = global.clearTimeout;
  const MAX_TIMER_DURATION_MS = 60 * 1000;
  if (Platform.OS === "android") {
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
      const waitingTime = ttl - Date.now();
      if (waitingTime <= 1) {
        InteractionManager.runAfterInteractions(() => {
          if (!timerFix[id]) {
            return;
          }
          delete timerFix[id];
          fn(...args);
        });
        return;
      }

      const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
      timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
      if (MAX_TIMER_DURATION_MS < time) {
        const ttl = Date.now() + time;
        const id = "_lt_" + Object.keys(timerFix).length;
        runTask(id, fn, ttl, args);
        return id;
      }
      return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = id => {
      if (typeof id === "string" && id.startWith("_lt_")) {
        _clearTimeout(timerFix[id]);
        delete timerFix[id];
        return;
      }
      _clearTimeout(id);
    };
  }

  const renderSongs = preparedSongs.length === 0 ? songs : preparedSongs;
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
        toggleSwitch,
        playSelected,
        toggleSwitchPlan,
        goForward,
        goBack,
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
        read,
        setRead,
        preparedSongs,
        switchValue,
        songs,
        switchPlan,
        carouselRef,
        renderSongs
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;

export { AppProvider };
