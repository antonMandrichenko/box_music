import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";

import SplashLoading from "../screens/SplashLoading";
import Login from "../screens/Login"

const switchNavigator = createSwitchNavigator({
  Load: SplashLoading,
  Login: Login
});
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
