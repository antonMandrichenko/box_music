import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";

import SplashLoading from "../screens/SplashLoading";
import Login from "../screens/Login";
import EmailConfirmation from "../screens/EmailConfirmation";
import EmailConfirm from "../screens/EmailConfirm";
import EnterPassword from "../screens/EnterPassword";
import ForgotPassword from "../screens/ForgotPassword";
import ForgotPasswordConfirm from "../screens/ForgotPasswordConfirm";
import CreatePassword from "../screens/EnterPassword";
import ChooseChannel from "../screens/ChooseChannel";

const switchNavigator = createSwitchNavigator({
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
  ChooseChannel: {
    screen: ChooseChannel,
    navigationOptions: {
      title: "ChooseChannel"
    }
  }
});
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
