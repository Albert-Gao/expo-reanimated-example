import React from "react";
import Animated from "react-native-reanimated";
import { runLoop } from "../../utils/animation";
import { ImageURISource } from "react-native";

export const AnimatedObject: React.FC<{
  top: string;
  durationInSec: number;
  image: ImageURISource;
}> = ({ image, top, durationInSec }) => {
  const translateX = runLoop({
    durationInSec,
    from: 0
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
