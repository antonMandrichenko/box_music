import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SplashLoading from "../screens/SplashLoading";
import Login from "../screens/Login"
import EmailConfirm from "../screens/EmailConfirm"
import ChooseChannel from "../screens/ChooseChannel"

export default createAppContainer(
  createSwitchNavigator({
    Load: {
      screen: SplashLoading,
      initialRouteName: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: 'Login'
      }
    },
    EmailConfirm: {
      screen: EmailConfirm,
      navigationOptions: {
        title: 'EmailConfirm'
      }
    },
    ChooseChannel: {
      screen: ChooseChannel,
      navigationOptions: {
        title: 'ChooseChannel'
      }
    }
}));
