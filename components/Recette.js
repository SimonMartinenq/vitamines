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

export const RecetteFooter = ({ data }) => {
  return (
    <View
    style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}
    >
        <FlatList
          data={data.nutrition.nutrients}
          renderItem={({ item }) => <Text>{item.name} {item.amount} {item.unit} ({item.percentOfDailyNeeds}% of daily needs)</Text>}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
          
      />
    </View>
  );
};


export const RecetteHeader = ({ data }) => {

  const renderData = () => {
    let toolsTab = []
    
    for (const iterator of data["analyzedInstructions"][0].steps) {
      for (const element of iterator.equipment) {
        if(toolsTab.includes(element) !== true){
          toolsTab.push(element.name)
        }
      }

    }
    return [...new Set(toolsTab)]
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
        <Text>Preparation time : {data.readyInMinutes}</Text>
        <Text>For {data.servings} people </Text>
        <Text>${data.pricePerServing/100} per serving</Text>
        <Text>Health score : {data.healthScore}%</Text>
        <FlatList
            data={data.extendedIngredients}
            renderItem={({ item }) => <Text>{item.name} {item.measures.metric.amount} {item.measures.metric.unitShort}</Text>}
            keyExtractor={(item) => item.id}
            listKey="ingredients"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent = {<Text style={{fontSize:30}}>Ingredients</Text>}
          />
        <View>
        <FlatList
            data={dataTab}
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

