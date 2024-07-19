import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "title" | "brand";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "title",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "title" ? styles.title : undefined,
        type === "brand" ? styles.brand : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    lineHeight: 32,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "bold",
  },
  brand: {
    fontSize: 14,
    lineHeight: 20,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
