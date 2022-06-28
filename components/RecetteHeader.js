import {React, useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity,StyleSheet, StatusBar,FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import IngredientCard from "./IngredientCard";




const RecetteHeader = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
        <Image 
        source={{uri : data.image}}
        resizeMode='contain'
        style={styles.image}
        />
        <Text>{data.title}</Text>
        <Text>Temps de préparation : {data.readyInMinutes}</Text>
        <FlatList
            data={data["analyzedInstructions"][0].steps}
            renderItem={({ item }) =><IngredientCard data={item.ingredients}/>}
            keyExtractor={(item) => item.number+""+item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<Text>Ingredients</Text>}
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

export default RecetteHeader;
