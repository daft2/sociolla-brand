import { ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import SwitchTabs from "@/components/SwitchTabs";
import FeaturedBrandCard from "@/components/FeaturedBrandCard";
import {
  getAlphabeticalBrandsUrl,
  getFeaturedBrandsUrl,
  ORIGIN_BRANDS_LIST,
} from "@/constants/sociolla";
import { fetchBrands } from "@/api/sociolla-api";
import ContentList from "@/components/ContentList";

export default function BrandsScreen() {
  const [featuredBrands, setFeaturedBrands] = useState<any[]>([]);
  const [alphabeticalBrands, setAlphabeticalBrands] = useState<{
    [key: string]: any[];
  }>({});
  const [activeTab, setActiveTab] = useState("Brand Name");

  const insets = useSafeAreaInsets();

  useEffect(() => {
    fetchBrands({ url: getFeaturedBrandsUrl }).then((data) => {
      setFeaturedBrands(data);
    });

    fetchBrands({ url: getAlphabeticalBrandsUrl }).then((data) => {
      setAlphabeticalBrands(data);
    });
  }, []);

  if (!featuredBrands || !alphabeticalBrands) return null;

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <View style={styles.titleContainer}>
        <View>
          <ThemedText type="title">Featured Brands</ThemedText>
          <ScrollView
            horizontal
            contentContainerStyle={{ gap: 16 }}
            showsHorizontalScrollIndicator
          >
            {featuredBrands &&
              featuredBrands.map((brand) => (
                <FeaturedBrandCard key={brand._id} brand={brand} />
              ))}
          </ScrollView>
        </View>
        <View>
          <SwitchTabs
            options={["Brand Name", "Brand Origins"]}
            selectedTab={activeTab}
            onChange={setActiveTab}
          />
        </View>
        {activeTab === "Brand Name" ? (
          <ContentList data={alphabeticalBrands} />
        ) : (
          <ContentList data={ORIGIN_BRANDS_LIST} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    padding: 16,
    gap: 16,
    backgroundColor: "#fff",
  },
});
