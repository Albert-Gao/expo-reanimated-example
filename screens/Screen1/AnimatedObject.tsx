import React from "react";
import Animated from "react-native-reanimated";
import {
  runLoop,
  updateLinearValue,
  SCREEN_WIDTH
} from "../../utils/animation";
import { ImageURISource } from "react-native";

export const AnimatedObject: React.FC<{
  top: string;
  durationInSec: number;
  image: ImageURISource;
}> = ({ image, top, durationInSec }) => {
  const translateX = runLoop({
    durationInSec,
    animationFunc: updateLinearValue(0, SCREEN_WIDTH)
  });

  return (
    <Animated.Image
      source={image}
      style={[
        {
          position: "absolute",
          top
        },
        { transform: [{ translateX }] }
      ]}
    />
  );
};
