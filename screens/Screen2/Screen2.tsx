import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScreenProps } from "../../utils";
import { ROUTES, COLORS } from "../../constants";
import { Screen } from "../../components/Screen";
import { Avatar } from "../../components/Avatar";
import { Description } from "./Description";
import { Photo } from "../../components/Photo";
import { BottomBar } from "../../components/BottomBar";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 72,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export const Screen2: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <Screen isBgDarker>
      <Photo isAbsolutePosition />
      <View style={style.container}>
        <Avatar />
        <Description />
        <View />
        <View />
        <BottomBar
          onPress={() => {
            navigation.navigate(ROUTES.Screen3);
          }}
        />
      </View>
    </Screen>
  );
};
