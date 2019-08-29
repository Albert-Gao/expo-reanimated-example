import React from "react";
import Animated from "react-native-reanimated";

export const Crab: React.FC = () => {
  return (
    <Animated.Image
      source={require("../../assets/crab.png")}
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
