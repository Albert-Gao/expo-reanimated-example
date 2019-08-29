import Animated, { Easing } from "react-native-reanimated";
import { Dimensions } from "react-native";

const {
  Clock,
  clockRunning,
  timing,
  debug,
  Value,
  set,
  cond,
  startClock,
  stopClock,
  block
} = Animated;

const WIDTH = Dimensions.get("window").width;

export type AnimationFunc = (
  clock: Animated.Clock,
  state: {
    finished: Animated.Value<0>;
    position: Animated.Value<0>;
    time: Animated.Value<0>;
    frameTime: Animated.Value<0>;
  },
  config: {
    duration: Animated.Value<number>;
    toValue: Animated.Value<0>;
    easing: Animated.EasingFunction;
  },
  from: number,
  to: number
) => Animated.Adaptable<number>;

const updateLinearValue: AnimationFunc = (
  clock: Animated.Clock,
  state: any,
  config: any,
  from: number,
  to: number
) =>
  block([
    cond(
      clockRunning(clock),
      [
        // if the clock is already running we update the toValue, in case a new dest has been passed in
        set(config.toValue, to)
      ],
      [
        // if the clock isn't running we reset all the animation params and start the clock
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, from),
        set(state.frameTime, 0),
        set(config.toValue, to),
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

export const runLoop = ({
  durationInSec,
  from,
  to = WIDTH + 8,
  animationFunc = updateLinearValue
}: {
  durationInSec: number;
  from: number;
  to?: number;
  animationFunc?: AnimationFunc;
}) => {
  const clock = new Clock();

  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: new Value(durationInSec * 1000),
    toValue: new Value(0),
    easing: Easing.inOut(Easing.linear)
  };

  return block([
    // start right away
    startClock(clock),

    // process your state
    animationFunc(clock, state, config, from, to),

    // when over (processed by timing at the end)
    cond(state.finished, [
      // we stop
      stopClock(clock),

      // set flag ready to be restarted
      set(state.finished, 0),
      // same value as the initial defined in the state creation
      set(state.position, 0),

      // very important to reset this ones !!! as mentioned in the doc about timing is saying
      set(state.time, 0),
      set(state.frameTime, 0),

      // and we restart
      startClock(clock)
    ]),

    state.position
  ]);
};
