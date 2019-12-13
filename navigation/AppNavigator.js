import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SplashLoading from "../screens/SplashLoading";
import Login from "../screens/Login"
import EmailConfirmation from "../screens/EmailConfirmation"
import EmailConfirm from "../screens/EmailConfirm";
import EnterPassword from "../screens/EnterPassword";
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
      EmailConfirmation: {
      screen: EmailConfirmation,
      navigationOptions: {
        title: 'EmailConfirmation'
      }
    },
      EmailConfirm: {
          screen: EmailConfirm,
          navigationOptions: {
              title: 'EmailConfirm'
          }
      },
      EnterPassword: {
          screen: EnterPassword,
          navigationOptions: {
              title: 'EnterPassword'
          }
      },
    ChooseChannel: {
      screen: ChooseChannel,
      navigationOptions: {
        title: 'ChooseChannel'
      }
    }
}));
