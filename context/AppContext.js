import React, { useState, useEffect, useContext } from "react";
import firebase from "../config/firebase";

const AppContext = React.createContext();
import { AsyncStorage } from "react-native";

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

  const checkBoxIn = e =>
    setChecked({
      ...checked,
      [e.target.innerText]: !checked[e.target.innerText]
    });

  const loadData = async () => {
    try {
      fetch("https://genius.p.rapidapi.com/artists/16775/songs", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "genius.p.rapidapi.com",
          "x-rapidapi-key": "309479cf94mshb9bec2e785880d9p149c01jsn2e869001ab9f"
        }
      })
        .then(response => response.json())
        .then(json => setData(json.response.songs));
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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
        typeDisplayed
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;

export { AppProvider };
