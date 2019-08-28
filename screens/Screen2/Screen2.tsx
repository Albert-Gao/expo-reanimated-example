import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ScreenProps } from "../../utils";
import { ROUTES } from "../../constants";
import { Screen } from "../../components/Screen";

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});

export const Screen2: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <Screen>
      <View style={style.container}>
        <Text>Screen2</Text>
        <Button
          onPress={() => {
            navigation.navigate(ROUTES.Screen3);
          }}
          title="screen3"
        />
      </View>
    </Screen>
  );
};
