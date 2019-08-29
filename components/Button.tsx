import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.buttonBg,
    paddingVertical: 16,
    flexShrink: 1,
    width: "auto",
    justifyContent: "center",
    borderRadius: 4,
    paddingHorizontal: 40
  },
  text: {
    fontWeight: "600",
    color: "white"
  }
});

export const Button: React.FC<{ label: string; onPress: () => void }> = ({
  label,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <Text style={style.text}>{label}</Text>
    </TouchableOpacity>
  );
};
