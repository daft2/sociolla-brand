import { View, TextInput } from "react-native";
import React from "react";
import { socColors } from "@/constants/Colors";
import { TabBarIcon } from "./navigation/TabBarIcon";

interface Props extends React.ComponentProps<typeof TextInput> {}

const SearchBar = ({ ...props }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderWidth: 1,
        borderColor: socColors.border,
        padding: 12,
        alignItems: "center",
        gap: 8,
        borderRadius: 4,
      }}
    >
      <TabBarIcon size={14} name={"search-outline"} color={socColors.border} />
      <TextInput
        style={{ fontSize: 16, flex: 1 }}
        placeholder="Search brand..."
        placeholderTextColor={"#9BA1A6"}
        {...props}
      />
    </View>
  );
};

export default SearchBar;
