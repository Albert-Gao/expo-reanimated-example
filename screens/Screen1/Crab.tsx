import React from "react";
import Animated from "react-native-reanimated";
import {
  runLoop,
  updateLinearValue,
  SCREEN_WIDTH
} from "../../utils/animation";

export const Crab: React.FC = () => {
  const translateX = runLoop({
    durationInSec: 8,
    animationFunc: updateLinearValue(0, 95)
  });

  const translateY = runLoop({
    durationInSec: 8,
    animationFunc: updateLinearValue(0, -195)
  });

  return (
    <Animated.Image
      source={require("../../assets/crab.png")}
      style={[
        {
          position: "absolute",
          right: 55,
          bottom: -55
        },
        { transform: [{ translateX, translateY }] }
      ]}
    />
  );
};
