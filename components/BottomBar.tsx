import React from "react";
import { View, Image, StyleSheet, ViewStyle } from "react-native";
import { Button } from "./Button";
import { ShadowBox } from "./ShadowBox";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center"
  },
  image: {
    width: 60,
    height: 60,
    borderColor: "#F7F7F8",
    borderWidth: 4,
    borderRadius: 60 / 2
  }
});

export const BottomBar: React.FC<{
  style?: ViewStyle;
  onPress: () => void;
}> = ({ style, onPress }) => {
  return (
    <View style={[styles.container, style ? style : {}]}>
      <ShadowBox>
        <Image source={require("../assets/volumn.png")} style={styles.image} />
      </ShadowBox>
      <Button onPress={onPress} label="NEXT" />
    </View>
  );
};
