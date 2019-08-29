import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar
} from "react-native";
import bg from "../assets/background.png";

const style = StyleSheet.create({
  container: { flex: 1 },
  background: {
    width: "100%",
    height: "100%"
  }
});

export const Screen: React.FC<{ isBgDarker?: boolean }> = ({
  isBgDarker = false,
  children
}) => {
  return (
    <ImageBackground source={bg} style={style.background}>
      <SafeAreaView style={style.container}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};
