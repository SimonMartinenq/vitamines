import {React } from "react";
import { View, Text, Image,StyleSheet, StatusBar,FlatList } from "react-native";

import { COLORS, SIZES } from "../constants";

export const EtapeCard = ({ data }) => {
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 5,
        }}>
          <Text style={styles.step}>Step {data.number}</Text>
          <Text style={styles.txtstep}>{data.step}</Text>
          
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
        <Text style={styles.tittle}>{data.title}</Text>

        <Image 
        source={{uri : data.image}}
        resizeMode='contain'
        style={styles.image}
        />
        
        <Text style={styles.txttittle}>Preparation time : {data.readyInMinutes}</Text>

        <Text style={styles.txtsubtittle}>For {data.servings} people </Text>
        <Text style={styles.txtsubtittle}>${data.pricePerServing/100} per serving</Text>
        <Text style={styles.txtsubtittle}>Health score : {data.healthScore}%</Text>

        <View style={styles.align}>
        <FlatList
            data={data.extendedIngredients}
            renderItem={({ item }) => <Text style={styles.txtlist}>• {item.name} {parseInt(item.measures.metric.amount)} {item.measures.metric.unitShort}</Text>}
            keyExtractor={(item) => item.id}
            listKey="ingredients"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent = {<Text style={styles.category}>Ingredients</Text>}
          />
        </View>
        <View style={styles.align}>
        <FlatList
            data={dataTab}
            renderItem={({ item }) => <Text style={styles.txtlist}>• {item}</Text>}
            keyExtractor={(item) => item}
            listKey="tools"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent = {<Text style={styles.category}>Tools</Text>}
          />
        </View>
        <Text style={{fontSize:16, fontWeight:'bold', marginTop:'5%'}}> Preparation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  align:{
      //flexDirection: "row",
      //color: 'black',
      backgroundColor: 'white',
      //fontWeight: 'bold',
      //fontSize: 20,
      borderColor: 'black',
      //borderWidth: 2,
      borderRadius: 30,
      padding: 5,
      //justifyContent:'center',
      //alignItems:'center',
      marginTop: '5%',
      marginBottom: '5%',
      //marginLeft: '16%',
      //marginRight: '16%',
      //width: 350,
  },
  
  back:{
      backgroundColor: "#E5E4E4",
  },
  decallage:{
      marginLeft: '10%',
  },
  imagelogo:{
      width: 25,
      height: 25,
      resizeMode: "contain",
      marginLeft: '5%',
      padding: 10
  },
  imagelogoleft:{
      width: 120,
      height: 120,
      resizeMode: "contain",
      //marginLeft: '50%',
  },
  txttittle:{
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
  },
  txtsubtittle:{
    fontSize: 16,
    textAlign: 'center',
  },
  tittle:{
    fontWeight: 'bold',
    fontSize: 28,
    padding: 25,
    textAlign: 'center',
  },
  txtbox:{
      padding: 5,
      textAlign: 'center',
      marginLeft: '5%',
  },
  category:{
    fontSize:16, 
    fontWeight:'bold',
    padding: 5,
    marginLeft: '10%'
    //marginTop: '3%',
  },
  step:{
    fontSize:14, 
    fontWeight:'bold',
    //padding: 5,
    marginLeft: '5%',
  },
  txtlist:{
    fontSize: 14,
    marginLeft: '15%',
  },
  txtstep:{
    fontSize: 14,
    marginLeft: '10%',
    textAlign:'justify',
    marginRight: '10%',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    margin:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#E5E4E4',
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
    borderRadius: 15,
  }
  });

