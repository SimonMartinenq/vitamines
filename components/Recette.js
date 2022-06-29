import {React } from "react";
import { View, Text, Image,StyleSheet, StatusBar,FlatList } from "react-native";

import { COLORS, SIZES } from "../constants";

export const EtapeCard = ({ data }) => {
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: SIZES.font,
        }}
      >
          <Text>{data.number}</Text>
          <Text>{data.step}</Text>
          
      </View>
    );
  };
  
export const IngredientCard = ({ data }) => {
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
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />    
      </View>
    );
  };

export const RecetteHeader = ({ data }) => {

  const renderData = () => {
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
    console.log([...new Set(ingredientsTab)],[...new Set(toolsTab)])
    return [[...new Set(ingredientsTab)],[...new Set(toolsTab)]]
  }
  const dataTab = renderData();
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
            data={dataTab[0]}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item) => item}
            listKey="ingredients"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent = {<Text style={{fontSize:30}}>Ingredients</Text>}
          />
        <View>
        <FlatList
            data={dataTab[1]}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item) => item}
            listKey="tools"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent = {<Text style={{fontSize:30}}>Tools</Text>}
          />
        </View>
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

