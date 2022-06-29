import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.dark,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        See the recipe
      </Text>
    </TouchableOpacity>
  );
};
