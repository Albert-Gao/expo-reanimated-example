import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ScreenProps } from "../../utils";
import { ROUTES } from "../../constants";
import { Screen } from "../../components/Screen";
import { BottomBar } from "../../components/BottomBar";
import { Photo } from "../../components/Photo";
import { selections } from "./selections.data";
import { Selection } from "./Selection";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  photoBox: { flexDirection: "row", justifyContent: "flex-end", padding: 16 },
  list: { paddingBottom: 28 }
});

export const Screen3: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <Screen>
      <View style={style.container}>
        <View style={style.photoBox}>
          <Photo />
        </View>
        <FlatList
          style={style.list}
          data={selections}
          renderItem={({ item }) => {
            console.log(item.key);
            return (
              <Selection index={parseInt(item.key, 10)} text={item.text} />
            );
          }}
        />
        <BottomBar
          style={{ paddingHorizontal: 16, paddingTop: 8 }}
          onPress={() => {
            navigation.navigate(ROUTES.Screen4);
          }}
        />
      </View>
    </Screen>
  );
};
