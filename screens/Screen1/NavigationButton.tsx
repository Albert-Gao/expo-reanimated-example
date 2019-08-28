import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import optionsPNG from "../../assets/options.png";
import { COLORS } from "../../constants";

const style = StyleSheet.create({
  outside: {
    marginVertical: 8,
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 6,
    shadowOpacity: 0.5
  },
  container: {
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
    textAlign: "center",
    color: COLORS.primary
  }
});

export const NavigationButton: React.FC<{
  label: string;
  onPress: () => void;
}> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.outside}>
      <View style={style.container}>
        <View style={style.imgBox}>
          <Image source={optionsPNG} />
        </View>
        <View style={style.textBox}>
          <Text style={style.text}>{label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
