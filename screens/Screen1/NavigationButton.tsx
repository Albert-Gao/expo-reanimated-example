import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { ShadowBox } from "../../components/ShadowBox";

const style = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)"
  },
  imgBox: {
    paddingVertical: 6
  },
  textBox: {
    width: "100%",
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: "white"
  },
  text: {
    fontWeight: "500",
    textAlign: "center",
    color: COLORS.primary
  }
});

export const NavigationButton: React.FC<{
  label: string;
  onPress: () => void;
}> = ({ label, onPress }) => {
  return (
    <ShadowBox>
      <TouchableOpacity onPress={onPress} style={style.container}>
        <View style={style.imgBox}>
          <Image source={require("../../assets/options.png")} />
        </View>
        <View style={style.textBox}>
          <Text style={style.text}>{label}</Text>
        </View>
      </TouchableOpacity>
    </ShadowBox>
  );
};
