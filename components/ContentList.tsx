import { View, Text, FlatList, Pressable, ScrollView } from "react-native";
import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { ThemedText } from "./ThemedText";

type Props = {
  data: {
    [key: string]: any[];
  };
};

const ContentList = ({ data }: Props) => {
  const [searchText, setSearchText] = React.useState("");
  const [searchedData, setSearchedData] = React.useState<any[]>([]);

  useEffect(() => {
    const temp: string[] = [];

    Object.keys(data).forEach((key) =>
      data[key].forEach((brand: any) => temp.push(brand.name as string))
    );

    setSearchedData(temp);
  }, [data]);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <SearchBar onChangeText={setSearchText} />
      </View>
      <View>
        <FlatList
          data={Object.keys(data)}
          renderItem={({ item }) => (
            <Pressable>
              <View style={{ padding: 12 }}>
                <ThemedText
                  type="brand"
                  style={{
                    color:
                      data[item as keyof typeof data].length > 0
                        ? "black"
                        : "#F0f0f0",
                  }}
                >
                  {item}
                </ThemedText>
              </View>
            </Pressable>
          )}
          horizontal
          showsHorizontalScrollIndicator
        />
      </View>

      {searchText.length > 0 ? (
        <ScrollView>
          {searchedData
            .filter((name: any) =>
              name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((brand: any) => (
              <View key={brand} style={{ padding: 12 }}>
                <ThemedText type="brand">{brand}</ThemedText>
              </View>
            ))}
        </ScrollView>
      ) : (
        <ScrollView>
          {Object.keys(data).map((key, i) =>
            data[key as keyof typeof data].length > 0 ? (
              <View key={key} style={{ padding: 12 }}>
                <ThemedText type="brand">{key}</ThemedText>
                {data[key as keyof typeof data].map((brand: any) => (
                  <View key={brand._id} style={{ padding: 12 }}>
                    <ThemedText type="brand">{brand.name}</ThemedText>
                  </View>
                ))}
              </View>
            ) : null
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default ContentList;
