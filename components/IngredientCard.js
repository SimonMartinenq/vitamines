import {React, useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity,StyleSheet, StatusBar, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES, assets } from "../constants";


const IngredientCard = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
        
        <FlatList
            data={data}
            renderItem={({ item }) => <Text>{item.name}</Text>    }
            keyExtractor={(item) => item.id+""+item.name}
            showsVerticalScrollIndicator={false}
          />    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      margin:30,
    },
    scrollView: {
      backgroundColor: 'transparent',
    },
    text: {
      justifyContent:"space-between",
      fontSize: 15,
    },
    image:{
      width: "100%",
      height: 250,
    }
  });

export default IngredientCard;
