import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ScreenProps } from "../../utils";
import { Screen } from "../../components/Screen";

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});

export const Screen4: React.FC<ScreenProps> = ({ navigation }) => {
  const selections = navigation.getParam("selections", []);

  return (
    <Screen>
      <View style={style.container}>
        <Text>Screen4</Text>
      </View>
    </Screen>
  );
};
