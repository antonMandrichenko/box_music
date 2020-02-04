import React from "react";
import {Image, StyleSheet, View, Text, TouchableOpacity, ImageBackground} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { vw } from "react-native-expo-viewport-units";
import plus from "../assets/images/iconsSvg/plus-rose.svg";
import minus from "../assets/images/iconsSvg/minus.svg";
import AnimatedCircularProgress from "./AnimatedCircularProgress";
import Slider from "react-native-slider/lib/Slider";
import PropTypes from 'prop-types';

const TrackLevel = ({count, path, preFill, w, h}) => {
  const [val, setVal] = React.useState(preFill);

  const change = value => {
    setVal(value);
  };

  const increase = () => {
    if (val >= 0 && val < 91) {
      setVal(val + 10);
    }
    if (val > 90) {
      setVal(100);
    } else return val;
  };
  const decrease = () => {
    if (val > 10 && val <= 100) {
      setVal(val - 10);
    } else if (val <= 10) {
      setVal(0);
    } else return val;
  };
  return (
    <View>
      <View>
        <LinearGradient
          style={styles.explore}
          colors={["#373843", "#2e2f39", "#24252d"]}
          locations={[0.3, 0.5, 0.8]}
        >
          <ImageBackground source={path} style={{width: w, height: h}} />
          <Text style={styles.number}>{count}</Text>
        </LinearGradient>
      </View>
      <View>
        <View style={styles.inputChannelButton}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#211725", "#382742", "#211725"]}
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10
            }}
            locations={[0, 0.5, 1]}
          >
            <View
              style={{
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#211725", "#382742", "#211725"]}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  position: "absolute",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                locations={[0, 0.5, 1]}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#211725", "#382742", "#211725"]}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 50,
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  locations={[0, 0.5, 1]}
                />
              </LinearGradient>
              <AnimatedCircularProgress
                size={60}
                width={5}
                prefill={0}
                fill={val}
                backgroundColor="#3a2e42"
                tintColor="#7a5dd5"
                style={{
                  transform: [{ rotate: `-90deg` }]
                }}
              >
                {fill => (
                  <Text
                    style={{
                      color: "#ad5dba",
                      fontSize: 14,
                      transform: [{ rotate: `90deg` }]
                    }}
                  >
                    {`${fill.toFixed(0)}%`}
                  </Text>
                )}
              </AnimatedCircularProgress>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["#08080a", "#1d1e25"]}
            style={styles.square}
            locations={[0.05, 1]}
          >
            <TouchableOpacity onPress={increase}>
              <Image source={plus} style={styles.iconInner} />
            </TouchableOpacity>
            <TouchableOpacity onPress={decrease}>
              <Image source={minus} style={styles.iconInner} />
            </TouchableOpacity>
          </LinearGradient>
          <View>
            <Slider
              thumbTintColor="#abaed0"
              minimumValue={0}
              maximumValue={100}
              onValueChange={change}
              value={val}
              style={{ width: 60 }}
              minimumTrackTintColor="#634cc8"
              maximumTrackTintColor="#24252d"
            />
          </View>
          <Text style={styles.text}>Explore Album</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputChannelButton: {
    width: vw(20),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e",
    backgroundColor: "#2f303a",
    paddingVertical: 10
  },
  explore: {
    width: vw(20),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e",
    paddingVertical: 10,
    marginBottom: 10
  },
  imageBackground: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start"
  },

  iconInner: {
    width: 20,
    height: 20
  },
  number: {
    fontSize: 22,
    fontWeight: "700",
    color: "#abaed0"
  },
  text: {
    fontSize: 9,
    paddingHorizontal: 5,
    color: "#abaed0",
    textAlign: "center"
  },
  square: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 60,
    borderRadius: 10,
    borderTopColor: "#202024",
    borderLeftColor: "#202024",
    borderRightColor: "#202024",
    borderBottomColor: "#4d4f5e",
    borderWidth: 1,
    padding: 5
  }
});

TrackLevel.propTypes = {
  count: PropTypes.number,
  path: PropTypes.string,
  preFill: PropTypes.number
};
export default TrackLevel;
