import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
import { BottomBar } from "../../../components/BottomBar";

const style = StyleSheet.create({
  container: {},
  headerBox: { backgroundColor: COLORS.red, padding: 16 },
  header: { color: "white" },
  contentBox: {
    backgroundColor: "white",
    padding: 16,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  content: {}
});

export const Description: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.headerBox}>
        <Text style={style.header}>
          Let's have a look at your triggers to gamble
        </Text>
      </View>
      <View style={style.contentBox}>
        <Text style={style.content}>
          The following are a range of common gambling triggers. Tap and select
          the ones that you believe trigger your gambling.
        </Text>
      </View>
    </View>
  );
};
