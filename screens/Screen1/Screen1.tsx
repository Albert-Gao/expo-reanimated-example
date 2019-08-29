import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { ScreenProps } from "../../utils";
import { ROUTES } from "../../constants";
import { Screen } from "../../components/Screen";
import { NavigationButton } from "./NavigationButton";
import { AnimatedObject } from "./AnimatedObject";
import { Crab } from "./Crab";

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
        <AnimatedObject
          image={require("../../assets/red-boat.png")}
          durationInSec={12}
          top="45%"
        />
        <AnimatedObject
          image={require("../../assets/canoe.png")}
          durationInSec={29}
          top="51%"
        />
        <AnimatedObject
          image={require("../../assets/yellow-boat.png")}
          durationInSec={22}
          top="47%"
        />
        <AnimatedObject
          image={require("../../assets/green-boat.png")}
          durationInSec={18}
          top="48%"
        />
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
