import {React, useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity,StyleSheet, StatusBar,FlatList,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import IngredientCard from "./IngredientCard";




const RecetteHeader = ({ data }) => {
  function renderData() {
    let ingredientsTab = []
    let toolsTab = []
    
    for (const iterator of data["analyzedInstructions"][0].steps) {
      for (const element of iterator.equipment) {
        if(toolsTab.includes(element) !== true){
          toolsTab.push(element.name)
        }
      }
      for (const element of iterator.ingredients) {
        if(ingredientsTab.includes(element) !== true){
          ingredientsTab.push(element.name)
        }
      }

    }
    return [[...new Set(ingredientsTab)],[...new Set(toolsTab)]]
    
    
  }
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
            data={renderData()[0]}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent = {<Text style={{fontSize:30}}>Ingredients</Text>}
          />
        <FlatList
            data={renderData()[1]}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent = {<Text style={{fontSize:30}}>Tools</Text>}
          />
        <Text style={{fontSize:30}}> Preparation</Text>
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
