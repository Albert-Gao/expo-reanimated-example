import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { ScreenProps } from "../../utils";
import { ROUTES } from "../../constants";
import { Screen } from "../../components/Screen";
import { NavigationButton } from "./NavigationButton";
import { Crab } from "./Crab";
import { Boats } from "./Boats";
import { Feet } from "./Feet";

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
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
        <Boats />
        <Feet />
        <Crab />
        <View style={style.buttonsBox}>
          {[
            "self check",
            "Money & time",
            "Harms",
            "My Reasons",
            "Triggers"
          ].map(label => (
            <NavigationButton key={label} label={label} onPress={onPress} />
          ))}
        </View>
      </View>
    </Screen>
  );
};
