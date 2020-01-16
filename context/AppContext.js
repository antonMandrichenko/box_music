import React, { useState, useEffect, useContext } from "react";
import firebase from "../config/firebase";
import { NavigationContext } from "react-navigation";

const AppContext = React.createContext();
import { AsyncStorage } from "react-native";

const AppProvider = ({ children},props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const nav = (props, page) => {
    try {
      if (validateEmail(email)) {
        props.navigation.navigate(page);
      } else setError(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmitEmail = async e => {
    await e.preventDefault();
    try {
      if (validateEmail(email)) {
        await setError("");
        // await AsyncStorage.setItem('email', email);
        await localStorage.setItem("email", email);
      } else setError(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = e => {
    const val = e.target.value;
    setEmail(val);
  };

  const handleChangePassword = e => {
    const val = e.target.value;
    setPassword(val);
  };

  const handleChangeConfirmPassword = e => {
    const val = e.target.value;
    setPasswordConfirm(val);
  };

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  const signUp = async e => {
    if (password !== passwordConfirm) {
      setError("password must be the same");
    } else {
      e.preventDefault();
      const emailStorage = await localStorage.getItem("email");
      await firebase
          .auth()
          .createUserWithEmailAndPassword(emailStorage, password)
          .catch(function(error) {
            // Handle Errors here.
            const errorMessage = error.message;
            setError(errorMessage);
            console.log(errorMessage);
            // ...
          });
    }
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
        email,
        error,
        password,
        passwordConfirm
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;

export { AppProvider };
