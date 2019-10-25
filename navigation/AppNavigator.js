import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SplashLoading from "../screens/SplashLoading";

export default createAppContainer(
  createSwitchNavigator({
    Load: SplashLoading
  })
);
