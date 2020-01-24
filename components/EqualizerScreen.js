import React from "react";
import {Image, View} from "react-native";

class EqualizerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let colors = [
      "#e75f92"
    ];
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
            <Equalizer colors={colors} />
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
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.00,

          elevation: 24,
        }}
      />
    );
  }
}

class Bar extends React.Component {
  constructor(props) {
    super(props);
    var maxHeight = this.props.maxHeight || 7;
    var minHeight = this.props.minHeight;
    var nextHeight = ((Math.random() * maxHeight) | 1) + 1;
    var cycleTime = (this.props.cycleTime || 0.2) * 100;

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
    // toggles between pause/play state of the bar
    var interval = this.state.interval;
    if (interval) {
      // currently playing -> pause the animation by clearing the interval
      clearInterval(interval);
      interval = null;
    } else {
      // currently paused -> start the animation by setting an interval for cycleNext function
      interval = setInterval(this.cycleNext, this.state.cycleTime);
    }
    // set the component's interval state
    this.setState({ interval: interval });
  }

  cycleNext() {
    // interval function -> constantly "chasing" the next height by adding/removing Unit components from the Bar component array
    var units = this.state.units.slice();
    var maxHeight = this.state.maxHeight;
    var nextHeight = this.state.nextHeight;
    var minHeight = this.state.minHeight;

    if (units.length < nextHeight) {
      // add another unit
      units.push(<Unit key={this.state.key} color={this.state.color} />);
      this.setState({
        key: this.state.key + 1
      });
    } else {
      // remove a unit
      units.shift();
    }
    this.setState({ units: units });

    if (units.length === nextHeight) {
      // randomize next target height
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
    var units = this.state.units;
    return <View onClick={this.toggle}>{units}</View>;
  }
}
class Equalizer extends React.Component {
  constructor(props) {
    super(props);
    var size = this.props.size || 20;
    var colors = this.props.colors || null;
    this.state = {
      size: size,
      bars: null,
      colors: colors
    };
  }

  componentDidMount() {
    var bars = [];
    for (var i = 0; i < this.state.size; i++) {
      var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      if (this.props.colors) {
        color = this.state.colors[i % this.state.colors.length];
      }
      bars.push(<Bar key={i} color={color} maxHeight={7} />);
    }
    this.setState({ bars: bars });
  }

  render() {
    var bars = this.state.bars || [];
    return (
      <View>
        <View
          style={styles.bars}
        >
          {bars}
        </View>
      </View>
    );
  }
}
const styles = {
  equalizer: { width: 300, height: 100, borderRadius: 20 },
  equalizerInner: {            shadowColor: "#403ec6",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24, },
  bars: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
    transform: [{ scaleX: 1}, {scaleY: -1 }],
    position: "absolute",
    bottom: 0, paddingHorizontal: 15
  }
};
export default EqualizerScreen;
