import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { socColors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

type Props = {
  options: string[];
  selectedTab?: string;
  onChange?: (tab: string) => void;
};

const SwitchTabs = ({ options, selectedTab, onChange }: Props) => {
  const [activeTab, setActiveTab] = useState(selectedTab ?? options[0]);

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((option, index) => (
        <Pressable
          key={"switch-tabs-key-" + option + "-" + index}
          onPress={() => handleTabPress(option)}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: activeTab === option ? socColors.primary : "white",
            paddingVertical: 10,
          }}
        >
          <ThemedText type="title">{option}</ThemedText>
        </Pressable>
      ))}
    </View>
  );
};

export default SwitchTabs;
