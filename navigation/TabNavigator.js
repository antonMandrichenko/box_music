import React from "react";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import NowPlaying from "../screens/NowPlaying";
import TrackLevels from "../screens/TrackLevels";
import Message from "../screens/Message";
import News from "../screens/News";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";
import { vw } from "react-native-expo-viewport-units";

const styles = {
  button: {
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: vw(25)
  },
  color: {
    color: "#fff"
  }
};
const TabNavigator = createBottomTabNavigator(
  {
    NowPlaying: {
      screen: NowPlaying,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <LinearGradient
              style={styles.button}
              colors={["#373843", "#2e2f39", "#24252d"]}
              locations={[0.3, 0.5, 0.8]}
            >
              <Feather name="play" size={32} style={styles.color} />
            </LinearGradient>
          ) : (
            <LinearGradient
              style={styles.button}
              colors={["#ad5dba", "#9958be"]}
              locations={[0, 0.5]}
              start={[0, 1]}
              end={[1, 0]}
            >
              <Feather name="play" size={32} style={styles.color} />
            </LinearGradient>
          )
      }
    },
    TrackLevels: {
      screen: TrackLevels,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <LinearGradient
              style={styles.button}
              colors={["#373843", "#2e2f39", "#24252d"]}
              locations={[0.3, 0.5, 0.8]}
            >
              <SimpleLineIcons
                name="equalizer"
                size={32}
                style={styles.color}
              />
            </LinearGradient>
          ) : (
            <LinearGradient
              style={styles.button}
              colors={["#9958be", "#8855c1"]}
              locations={[0, 0.5]}
              start={[0, 1]}
              end={[1, 0]}
            >
              <SimpleLineIcons
                name="equalizer"
                size={32}
                style={styles.color}
              />
            </LinearGradient>
          )
      }
    },
    Message: {
      screen: Message,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <LinearGradient
              style={styles.button}
              colors={["#373843", "#2e2f39", "#24252d"]}
              locations={[0.3, 0.5, 0.8]}
            >
              <MaterialCommunityIcons
                name="message-text-outline"
                size={32}
                style={styles.color}
              />
            </LinearGradient>
          ) : (
            <LinearGradient
              style={styles.button}
              colors={["#8855c1", "#634cc8"]}
              locations={[0, 0.5]}
              start={[0, 1]}
              end={[1, 0]}
            >
              <MaterialCommunityIcons
                name="message-text-outline"
                size={32}
                style={styles.color}
              />
            </LinearGradient>
          )
      }
    },
    News: {
      screen: News,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <LinearGradient
              style={styles.button}
              colors={["#373843", "#2e2f39", "#24252d"]}
              locations={[0.3, 0.5, 0.8]}
            >
              <FontAwesome
                name={"newspaper-o"}
                size={32}
                style={styles.color}
              />
            </LinearGradient>
          ) : (
            <LinearGradient
              style={styles.button}
              colors={["#634cc8", "#4c47cb"]}
              locations={[0, 0.5]}
              start={[0, 1]}
              end={[1, 0]}
            >
              <FontAwesome
                name={"newspaper-o"}
                size={32}
                style={styles.color}
              />
            </LinearGradient>
          )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        flexDirection: "row",
        paddingVertical: 10,
        height: 60
      }
    }
  }
);

export default createAppContainer(TabNavigator);
