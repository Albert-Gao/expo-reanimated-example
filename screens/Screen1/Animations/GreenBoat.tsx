import React from "react";
import Animated from "react-native-reanimated";
import { runLoop } from "../../../utils/animation";

export const GreenBoat: React.FC = () => {
  const translateX = runLoop({
    durationInSec: 18,
    from: 0
  });

  return (
    <Animated.Image
      source={require("../../../assets/green-boat.png")}
      style={[
        {
          position: "absolute",
          top: "45%"
        },
        { transform: [{ translateX }] }
      ]}
    />
  );
};
