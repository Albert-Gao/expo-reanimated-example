import React from "react";
import Animated, { Easing } from "react-native-reanimated";
import { Dimensions } from "react-native";

const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
  Image
} = Animated;

function runTiming(clock: Animated.Clock, value: number, dest: number) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 5000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(
      clockRunning(clock),
      [
        // if the clock is already running we update the toValue, in case a new dest has been passed in
        set(config.toValue, dest)
      ],
      [
        // if the clock isn't running we reset all the animation params and start the clock
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock)
      ]
    ),
    // we run the step here that is going to update position
    timing(clock, state, config),
    // if the animation is over we stop the clock
    cond(state.finished, debug("stop clock", stopClock(clock))),
    // we made the block return the updated position
    state.position
  ]);
}

const WIDTH = Dimensions.get("window").width;

export class GreenBoat extends React.Component {
  clock = new Clock();

  transX = runTiming(this.clock, 0, WIDTH + 10);

  render() {
    return (
      <Image
        source={require("../../../assets/green-boat.png")}
        style={[
          {
            position: "absolute",
            top: "45%"
          },
          { transform: [{ translateX: this.transX }] }
        ]}
      />
    );
  }
}
