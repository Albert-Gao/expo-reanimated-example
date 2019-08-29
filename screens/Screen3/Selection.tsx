import React from "react";
import { View, Text, Image, StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "../../constants";
import { ShadowBox } from "../../components/ShadowBox";

const style = StyleSheet.create({
  outside: {
    flexDirection: "row",
    width: "100%",
    marginTop: 16,
    marginBottom: 8
  },
  container: {
    flexDirection: "row",
    width: "90%"
  },
  blockBox: { backgroundColor: COLORS.orange, width: "5%", height: "100%" },
  contentContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 6,
    alignItems: "center",
    justifyContent: "space-between"
  },
  contentBox: {
    flex: 0,
    flexGrow: 1,
    maxWidth: "80%"
  },
  content: {
    fontWeight: "500",
    fontSize: 16
  },
  image: { width: 68, height: 68 }
});

export const Selection: React.FC<{ index: number; text: string }> = ({
  index,
  text
}) => {
  const isOddIndex = index % 2 !== 0;

  const contentToRender = [
    <View key="contentBox" style={style.contentBox}>
      <Text style={[style.content, isOddIndex ? { marginLeft: 6 } : {}]}>
        {text}
      </Text>
    </View>,
    <Image
      key="imgWizard"
      source={require("../../assets/wizard.png")}
      style={style.image}
    />
  ];

  const inside = [
    <View key="block" style={style.blockBox} />,
    <View
      key="content"
      style={[
        style.contentContainer,
        isOddIndex
          ? { borderTopStartRadius: 50, borderBottomStartRadius: 50 }
          : { borderTopEndRadius: 50, borderBottomEndRadius: 50 }
      ]}
    >
      {contentToRender}
    </View>
  ];

  if (isOddIndex) {
    contentToRender.reverse();
    inside.reverse();
  }

  const containerPosition: ViewStyle = isOddIndex
    ? { justifyContent: "flex-end" }
    : { justifyContent: "flex-start" };

  return (
    <ShadowBox style={[style.outside, containerPosition]}>
      <View style={[style.container, containerPosition]}>{inside}</View>
    </ShadowBox>
  );
};
