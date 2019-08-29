import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../../constants";

export const ItemIndex: React.FC<{ index: number }> = ({ index }) => (
  <View
    style={{
      height: "100%",
      width: 48,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.red
    }}
  >
    <Text
      style={{
        color: "white",
        fontWeight: "500"
      }}
    >
      {index + 1}
    </Text>
  </View>
);
