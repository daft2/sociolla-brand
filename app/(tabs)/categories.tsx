import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CategoriesScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedView style={{ flexDirection: "row" }}>
          <ThemedText type="title">Categories Screen</ThemedText>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
