import React, { useState } from "react";
import { Alert, View, FlatList, StyleSheet } from "react-native";
import { ScreenProps } from "../../utils";
import { ROUTES } from "../../constants";
import { Screen } from "../../components/Screen";
import { BottomBar } from "../../components/BottomBar";
import { Photo } from "../../components/Photo";
import { selections } from "./selections.data";
import { Selection } from "./Selection";
import { SelectionContext } from "./context";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  photoBox: { flexDirection: "row", justifyContent: "flex-end", padding: 16 },
  list: { paddingBottom: 28 }
});

export const Screen3: React.FC<ScreenProps> = ({ navigation }) => {
  const [selected, setSelected] = useState([]);

  return (
    <Screen>
      <View style={style.container}>
        <View style={style.photoBox}>
          <Photo />
        </View>
        <SelectionContext.Provider value={selected}>
          <FlatList
            style={style.list}
            data={selections}
            renderItem={({ item }) => {
              return (
                <Selection
                  index={parseInt(item.key, 10)}
                  text={item.text}
                  onPress={() => {
                    setSelected(prevItems => {
                      if (prevItems.includes(item.key)) {
                        return prevItems.filter(key => key !== item.key);
                      }

                      return [...prevItems, item.key];
                    });
                  }}
                />
              );
            }}
          />
        </SelectionContext.Provider>
        <BottomBar
          style={{ paddingHorizontal: 16, paddingTop: 8 }}
          onPress={() => {
            if (!selected.length) {
              Alert.alert("Please pressing to select some reasons first. :)");
              return;
            }

            navigation.navigate(ROUTES.Screen4, {
              selections: selected
            });
          }}
        />
      </View>
    </Screen>
  );
};
