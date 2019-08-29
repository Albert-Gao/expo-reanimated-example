import React from "react";
import { View, Image } from "react-native";

const FeetImage: React.FC<{ isLight?: boolean; marginLeft?: number }> = ({
  marginLeft,
  isLight
}) => {
  const fileName = isLight
    ? require("../../assets/feet-light.png")
    : require("../../assets/feet.png");

  return <Image source={fileName} style={marginLeft ? { marginLeft } : {}} />;
};

const BASE_FEET_GAP = 28;

export const Feet = () => {
  return (
    <View style={{ position: "absolute", bottom: 40, left: 100 }}>
      <FeetImage marginLeft={BASE_FEET_GAP * 4} />
      <FeetImage isLight marginLeft={BASE_FEET_GAP * 3} />
      <FeetImage marginLeft={BASE_FEET_GAP * 2} />
      <FeetImage isLight marginLeft={BASE_FEET_GAP} />
      <FeetImage />
    </View>
  );
};
