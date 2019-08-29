import React from "react";
import { View, Text } from "react-native";

export const ItemText: React.FC<{ text: string }> = ({ text }) => (
  <View
    style={{
      height: "100%",
      flexGrow: 1,
      backgroundColor: "white",
      justifyContent: "center",
      paddingHorizontal: 16,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8
    }}
  >
    <Text
      style={{
        color: "black",
        fontSize: 14,
        fontWeight: "500"
      }}
    >
      {text}
    </Text>
  </View>
);
