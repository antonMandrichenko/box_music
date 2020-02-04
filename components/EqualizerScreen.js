import React from "react";
import { Image, View, StyleSheet } from "react-native";

class EqualizerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let colors = ["#e75f92"];
    const playing = this.props.playing;
    return (
      <View>
        <Image
          style={styles.equalizer}
          source={
            __DEV__
              ? require("../assets/images/backgroundEqualizer.png")
              : require("../assets/images/backgroundEqualizer.png")
          }
        />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Equalizer colors={colors} playing={playing} />
        </View>
      </View>
    );
  }
}
class Unit extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.color,
          width: 5,
          height: 5,
          margin: 2,
          padding: 0,
          shadowColor: "#e75f92",
          shadowOffset: {
            width: 0,
            height: 12
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24
        }}
      />
    );
  }
}

class Bar extends React.Component {
  constructor(props) {
    super(props);
    const maxHeight = this.props.maxHeight || 7;
    const minHeight = this.props.minHeight;
    const nextHeight = ((Math.random() * maxHeight) | 1) + 1;
    const cycleTime = (this.props.cycleTime || 0.2) * 100;

    this.state = {
      color: this.props.color,
      key: 0,
      units: [],
      maxHeight: maxHeight,
      minHeight: minHeight,
      nextHeight: nextHeight,
      cycleTime: cycleTime,
      interval: null
    };
    this.toggle = this.toggle.bind(this);
    this.cycleNext = this.cycleNext.bind(this);
  }

  componentDidMount() {
    this.toggle();
  }

  componentWillUnmount() {
    if (this.state.interval) {
      this.toggle();
    }
  }

  toggle() {
    let interval = this.state.interval;
    if (interval) {
      clearInterval(interval);
      interval = null;
    } else {
      interval = setInterval(this.cycleNext, this.state.cycleTime);
    }
    this.setState({ interval: interval });
  }

  cycleNext() {
    const units = this.state.units.slice();
    const maxHeight = this.state.maxHeight;
    let nextHeight = this.state.nextHeight;
    const minHeight = this.state.minHeight;

    if (units.length < nextHeight) {
      units.push(<Unit key={this.state.key} color={this.state.color} />);
      this.setState({
        key: this.state.key + 1
      });
    } else {
      units.shift();
    }
    this.setState({ units: units });

    if (units.length === nextHeight) {
      if (minHeight) {
        nextHeight = nextHeight === minHeight ? maxHeight : minHeight;
      } else {
        nextHeight = ((Math.random() * maxHeight) | 1) + 1;
      }

      this.setState({
        nextHeight: nextHeight
      });
    }
  }

  render() {
    const units = this.state.units;
    return <View onClick={this.toggle}>{units}</View>;
  }
}
class Equalizer extends React.Component {
  constructor(props) {
    super(props);
    const size = this.props.size || 20;
    const colors = this.props.colors || null;
    this.state = {
      size: size,
      bars: null,
      colors: colors
    };
  }

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS
  ): void {
    if (prevProps.playing !== this.props.playing) {
      if (this.props.playing) {
        let bars = [];
        for (let i = 0; i < this.state.size; i++) {
          bars.push(<Bar key={i} color={'#e75f92'} maxHeight={7} />);
        }
        this.setState({ bars: bars });
      } else {
        this.setState({ bars: [] });
      }
    }
  }

  render() {
    let bars = this.state.bars || [];
    return (
      <View>
        <View style={styles.bars}>{bars}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  equalizer: { width: 300, height: 100, borderRadius: 20 },
  equalizerInner: {
    shadowColor: "#403ec6",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  bars: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
    transform: [{ scaleX: 1 }, { scaleY: -1 }],
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 15
  }
});
export default EqualizerScreen;
