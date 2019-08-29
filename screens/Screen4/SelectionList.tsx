import React, { useState } from "react";
import DraggableFlatList from "react-native-draggable-flatlist";
import { selections as defaultSelections } from "../Screen3/selections.data";
import { SelectionItem } from "./SelectionItem/SelectionItem";

export const SelectionList: React.FC<{ selections: string[] }> = ({
  selections
}) => {
  const [data, setData] = useState(
    defaultSelections.filter(item => selections.includes(item.key))
  );

  return (
    <DraggableFlatList
      data={data}
      renderItem={({ item, index, move, moveEnd, isActive }) => (
        <SelectionItem
          item={item}
          index={index}
          move={move}
          moveEnd={moveEnd}
          isActive={isActive}
        />
      )}
      keyExtractor={item => `draggable-item-${item.key}`}
      scrollPercent={5}
      onMoveEnd={({ data }) => {
        setData(data);
      }}
    />
  );
};
