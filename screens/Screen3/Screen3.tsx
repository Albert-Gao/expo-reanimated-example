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

export const Screen3: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <Screen>
      <View style={style.container}>
        <Text>Screen3</Text>
        <Button
          onPress={() => {
            navigation.navigate(ROUTES.Screen4);
          }}
          title="screen4"
        />
      </View>
    </Screen>
  );
};
