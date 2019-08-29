import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScreenProps } from "../../utils";
import { ROUTES, COLORS } from "../../constants";
import { Screen } from "../../components/Screen";
import { Button } from "../../components/Button";
import { Avatar } from "./components/Avatar";
import { Description } from "./components/Description";
import { Photo } from "../../components/Photo";
import { BottomBar } from "../../components/BottomBar";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 32,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between"
  },
  photo: {},
  avatarBox: {
    width: "100%"
  },
  nextButton: {
    backgroundColor: COLORS.buttonBg
  }
});

export const Screen2: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <Screen isBgDarker>
      <View style={style.container}>
        <Photo isAbsolutePosition />
        <Avatar />
        <Description />
        <BottomBar
          onPress={() => {
            navigation.navigate(ROUTES.Screen3);
          }}
        />
      </View>
    </Screen>
  );
};
