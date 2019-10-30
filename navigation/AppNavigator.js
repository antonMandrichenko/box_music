import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SplashLoading from "../screens/SplashLoading";
import Login from "../screens/Login"

export default createAppContainer(
  createSwitchNavigator({
    Load: SplashLoading,
    Login: Login
  })
);
