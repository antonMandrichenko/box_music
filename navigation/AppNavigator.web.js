import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import SplashLoading from "../screens/SplashLoading";

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Load: SplashLoading
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
