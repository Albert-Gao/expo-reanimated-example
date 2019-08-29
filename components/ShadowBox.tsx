import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

export const ShadowBox: React.FC<{ style?: StyleProp<ViewStyle> }> = ({
  style = {},
  children
}) => {
  return (
    <View
      style={[
        {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8
        },
        style
      ]}
    >
      {children}
    </View>
  );
};
