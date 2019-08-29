import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  headerBox: { backgroundColor: COLORS.red, padding: 16 },
  header: { color: "white", fontWeight: "600" }
});

export const SectionHeader: React.FC<{ text: string; style?: ViewStyle }> = ({
  style,
  text
}) => {
  return (
    <View style={[styles.headerBox, style ? style : {}]}>
      <Text style={styles.header}>{text}</Text>
    </View>
  );
};
