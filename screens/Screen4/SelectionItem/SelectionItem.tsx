import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ShadowBox } from "../../../components/ShadowBox";
import { ItemIndex } from "./ItemIndex";
import { ItemText } from "./ItemText";
import { COLORS } from "../../../constants";

export const SelectionItem: React.FC<{
  item: { key: string; text: string };
  index: number;
  move: () => void;
  moveEnd: () => void;
  isActive: boolean;
}> = ({ item, index, move, moveEnd, isActive }) => {
  return (
    <ShadowBox>
      <TouchableOpacity
        style={{
          width: "95%",
          height: 48,
          alignItems: "center",
          flexDirection: "row",
          marginTop: 16,
          ...(isActive
            ? { opacity: 0.5, borderColor: COLORS.primary, borderWidth: 3 }
            : { opacity: 1 })
        }}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        <ItemIndex index={index} />
        <ItemText text={item.text} />
      </TouchableOpacity>
    </ShadowBox>
  );
};
