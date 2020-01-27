import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SplashLoading from "../screens/SplashLoading";
import Login from "../screens/Login";
import EmailConfirmation from "../screens/EmailConfirmation";
import EmailConfirm from "../screens/EmailConfirm";
import EnterPassword from "../screens/EnterPassword";
import ForgotPassword from "../screens/ForgotPassword";
import ChooseChannel from "../screens/ChooseChannel";
import ForgotPasswordConfirm from "../screens/ForgotPasswordConfirm";
import CreateChannel from "../screens/CreateChannel";
import TabNavigator from "./TabNavigator";

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
        header: "Login"
      }
    },
    EmailConfirmation: {
      screen: EmailConfirmation,
      navigationOptions: {
        title: "EmailConfirmation"
      }
    },
    EmailConfirm: {
      screen: EmailConfirm,
      navigationOptions: {
        title: "EmailConfirm"
      }
    },
    EnterPassword: {
      screen: EnterPassword,
      navigationOptions: {
        title: "EnterPassword"
      }
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        title: "ForgotPassword"
      }
    },
    ForgotPasswordConfirm: {
      screen: ForgotPasswordConfirm,
      navigationOptions: {
        title: "ForgotPasswordConfirm"
      }
    },
    CreateChannel: {
      screen: CreateChannel,
      navigationOptions: {
        title: "CreateChannel"
      }
    },
    ChooseChannel: {
      screen: ChooseChannel,
      navigationOptions: {
        title: "ChooseChannel"
      }``
    },
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        title: "TabNavigator"
      }
    }
  })
);
