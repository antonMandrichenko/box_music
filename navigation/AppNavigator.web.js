import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";

import SplashLoading from "../screens/SplashLoading";
import Login from "../screens/Login"
import { Stripe } from "../components/Stripe";
import EmailConfirm from "../screens/EmailConfirm";

const switchNavigator = createSwitchNavigator({
  // Load: SplashLoading,
  // Login: Login,
  // Stripe: Stripe,
  EmailConfirm: EmailConfirm

});
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
