import React, { useCallback } from "react";
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
import { ScreenProps } from "../../utils";
import { ROUTES } from "../../constants";
import { Screen } from "../../components/Screen";
import { NavigationButton } from "./NavigationButton";

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonsBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 32
  }
});

export const Screen1: React.FC<ScreenProps> = ({ navigation }) => {
  const onPress = useCallback(() => {
    navigation.navigate(ROUTES.Screen2);
  }, []);

  return (
    <Screen>
      <View style={style.container}>
        <View style={style.buttonsBox}>
          <NavigationButton label="self check" onPress={onPress} />
          <NavigationButton label="Money & time" onPress={onPress} />
          <NavigationButton label="Harms" onPress={onPress} />
          <NavigationButton label="My Reasons" onPress={onPress} />
          <NavigationButton label="Triggers" onPress={onPress} />
        </View>
      </View>
    </Screen>
  );
};
