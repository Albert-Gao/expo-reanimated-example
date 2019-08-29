import React from "react";
import { Alert, View, StyleSheet } from "react-native";
import { ScreenProps } from "../../utils";
import { Screen } from "../../components/Screen";
import { Avatar } from "../../components/Avatar";
import { SectionHeader } from "../../components/SectionHeader";
import { BottomBar } from "../../components/BottomBar";
import { SelectionList } from "./SelectionList";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  sectionHeader: {
    marginTop: 24
  },
  upperBox: {
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 32,
    alignItems: "center"
  },
  lowerBox: { paddingHorizontal: 16, paddingTop: 8 }
});

export const Screen4: React.FC<ScreenProps> = ({ navigation }) => {
  const selections = navigation.getParam("selections", []);

  return (
    <Screen>
      <View style={style.container}>
        <View style={style.upperBox}>
          <Avatar />
          <SectionHeader
            text="Put the selections in order from the most common trigger for you gamble to the lease"
            style={style.sectionHeader}
          />
        </View>
        <SelectionList selections={selections} />
        <BottomBar
          style={style.lowerBox}
          onPress={() => {
            Alert.alert("to be continued");
          }}
        />
      </View>
    </Screen>
  );
};
