import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppNavigator from "./navigation/AppNavigator";
import { AppProvider } from "./context/AppContext"
import {PlayerProvider} from "./context/PlayerContext";
export default function App(props) {


  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
        <AppProvider>
          <PlayerProvider>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
          </PlayerProvider>
        </AppProvider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/background-login.jpg"),
      require("./assets/images/background.jpg"),
      require("./assets/images/background.png"),
      require("./assets/images/backgroundEqualizer.png"),
      require("./assets/images/emailconfirm-background.jpg"),
      require("./assets/images/next.png"),
      require("./assets/images/plus.png"),
      require("./assets/images/play.png"),
      require("./assets/images/icons/ad-song.png"),
      require("./assets/images/icons/answer.png"),
      require("./assets/images/icons/arrow-bot.png"),
      require("./assets/images/icons/arrow-top.png"),
      require("./assets/images/icons/binoculars.png"),
      require("./assets/images/icons/btnHistory.png"),
      require("./assets/images/icons/cancel.png"),
      require("./assets/images/icons/checkbox-circle.png"),
      require("./assets/images/icons/double.png"),
      require("./assets/images/icons/email.png"),
      require("./assets/images/icons/email-confirm.png"),
      require("./assets/images/icons/email-copy.png"),
      require("./assets/images/icons/facebook.png"),
      require("./assets/images/icons/google.png"),
      require("./assets/images/icons/group.png"),
      require("./assets/images/icons/headphones.png"),
      require("./assets/images/icons/heart.png"),
      require("./assets/images/icons/key-confirm.png"),
      require("./assets/images/icons/left-arrow.png"),
      require("./assets/images/icons/minus.png"),
      require("./assets/images/icons/password.png"),
      require("./assets/images/icons/plus.png"),
      require("./assets/images/icons/search.png"),
      require("./assets/images/icons/send.png"),
      require("./assets/images/icons/single.png"),
      require("./assets/images/icons/triangleBottom.png"),
      require("./assets/images/icons/user.png"),
      require("./assets/images/freddie.png"),
      require("./assets/images/radio/radio1.jpg"),
      require("./assets/images/radio/radio2.jpg"),
      require("./assets/images/radio/radio3.jpg"),
      require("./assets/images/radio/radio4.jpg"),
      require("./assets/images/radio/radio5.jpg"),
      require("./assets/images/radio/radio6.jpg"),
      require("./assets/images/radio/add1.jpeg"),
      require("./assets/images/radio/add2.jpeg"),
      require("./assets/images/radio/add3.jpeg"),
      require("./assets/images/radio/add4.jpeg"),
      require("./assets/images/radio/add5.jpeg"),
      require("./assets/images/radio/add6.jpeg"),
      require("./assets/images/radio/add7.jpeg"),
      require("./assets/images/radio/add8.jpeg"),
      require("./assets/images/radio/add9.jpeg"),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
