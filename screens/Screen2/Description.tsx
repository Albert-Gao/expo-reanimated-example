import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SectionHeader } from "../../components/SectionHeader";

const style = StyleSheet.create({
  container: {},
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
      <SectionHeader text="Let's have a look at your triggers to gamble" />
      <View style={style.contentBox}>
        <Text style={style.content}>
          The following are a range of common gambling triggers. Tap and select
          the ones that you believe trigger your gambling.
        </Text>
      </View>
    </View>
  );
};
