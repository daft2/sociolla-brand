import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors, socColors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: socColors.socActiveColor,
        tabBarInactiveTintColor: socColors.socDark,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: socColors.socBottomBarBackground,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"home-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"grid-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="brands"
        options={{
          title: "Brands",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"pricetag-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"heart-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-profile"
        options={{
          title: "My Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"person-outline"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
