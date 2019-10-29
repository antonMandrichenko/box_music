import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SplashLoading from "../screens/SplashLoading";
import androidLogin from "../screens/androidLogin"

export default createAppContainer(
  createSwitchNavigator({
    Load: SplashLoading,
    Login: androidLogin
  })
);
