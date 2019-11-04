import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";

import SplashLoading from "../screens/SplashLoading";
import Login from "../screens/Login"
import EmailConfirm from "../screens/EmailConfirm";
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
});
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
