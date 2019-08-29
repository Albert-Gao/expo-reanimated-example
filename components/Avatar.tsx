import React from "react";
import { View, Image } from "react-native";
import { COLORS } from "../constants";
import { ShadowBox } from "./ShadowBox";

export const Avatar: React.FC = () => {
  return (
    <ShadowBox>
      <Image
        source={require("../assets/avatar.png")}
        style={{
          width: 110,
          height: 110,
          borderColor: COLORS.primary,
          borderWidth: 2,
          borderRadius: 110 / 2
        }}
      />
    </ShadowBox>
  );
};
