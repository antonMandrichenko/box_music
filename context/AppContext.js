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
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

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

  const checkBoxIn = (e) => setChecked({...checked, [e.target.innerText]: !checked[e.target.innerText]});

  const searchFilterFunction = (text, data) => {
    //passing the inserted text in textinput
    const newData = data.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      return itemData.indexOf(text) > -1;
    });
    setSearch(newData);
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
        searchFilterFunction,
          setFilter,
        email,
        error,
        password,
        passwordConfirm,
        checked,
        search,
          filter
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;

export { AppProvider };
