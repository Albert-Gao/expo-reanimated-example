import React from "react";
import { Image } from "react-native";
import { ShadowBox } from "./ShadowBox";

export const Photo: React.FC<{ isAbsolutePosition?: boolean }> = ({
  isAbsolutePosition
}) => {
  return (
    <ShadowBox
      style={
        isAbsolutePosition ? { position: "absolute", right: 24, top: 24 } : {}
      }
    >
      <Image
        source={require("../assets/photo.png")}
        style={{
          width: 70,
          height: 70
        }}
      />
    </ShadowBox>
  );
};
