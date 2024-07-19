import { Pressable, Image } from "react-native";
import React from "react";

type Props = {
  onPress?: () => void;
  brand: {
    name: string;
    _id: string;
    logo: string;
  };
};

const FeaturedBrandCard = ({ onPress, brand }: Props) => {
  return (
    <Pressable key={brand?._id} onPress={onPress}>
      <Image
        accessibilityLabel={brand?.name}
        source={{ uri: brand?.logo }}
        style={{
          width: 140,
          height: 70,
          borderRadius: 4,
          borderWidth: 1,
          overflow: "hidden",
        }}
      />
    </Pressable>
  );
};

export default FeaturedBrandCard;
