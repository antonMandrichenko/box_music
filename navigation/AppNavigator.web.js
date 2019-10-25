import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";

import SplashLoading from "../screens/SplashLoading";

const switchNavigator = createSwitchNavigator({
  Load: SplashLoading
});
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
