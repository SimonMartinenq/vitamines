import {React } from "react";
import { View, Text, Image,StyleSheet, StatusBar,FlatList } from "react-native";
import { useState } from "react";
import {RecaipeTitle } from "./SubInfo";
import {COLORS, SIZES, FONTS } from "../constants";

const DetailsDesc = ({ data }) => {  const [text, setText] = useState(data.description.slice(0, 100));  const [readMore, setReadMore] = useState(false);
  return (
  <>      
    <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
      <Text  style={{fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary}}>Description</Text>
      <View style={{marginTop: SIZES.base}}>
        <Text style={{color: COLORS.secondary, fontSize: SIZES.small, fontFamily: FONTS.regular, lineHeight: SIZES.large}}>
          {text}{!readMore && "..."}
          <Text  style={{color: COLORS.primary, fontSize: SIZES.small, fontFamily: FONTS.semiBold}} 
            onPress={() => {
              if (!readMore) {
                setText(data.description); 
                setReadMore(true);
              } 
              else {
                setText(data.description.slice(0, 100)); 
                setReadMore(false);
                }
            }}>              
            {readMore ? " Show Less" : " Read More"}
          </Text>
        </Text>
      </View>
    </View>
  </>);
};


export default DetailsDesc;

export const EtapeCard = ({ data }) => {
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 5,
        }}>
        <View style={styles.stepbox}>
          <Text style={styles.step}>Step {data.number}</Text>
          <Text style={styles.txtstep}>{data.step}</Text>
        </View>  
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
      <View style={{justifyContent:'center',
    alignItems:'center',}}>
        <Image 
        source={{uri : data.image}}
        style={styles.image}
        />
      </View> 

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

        <Text style={{fontSize:20, fontWeight:'bold', marginTop:'5%', textAlign:'center'}}> Preparation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  align:{
      backgroundColor: '#F9D2D2',
      borderRadius: 30,
      padding: 5,
      marginTop: '5%',
      marginBottom: '5%',
  },
  stepbox:{
    backgroundColor: '#F9D2D2',
    borderRadius: 30,
    padding: 2,
    margin:'1%'
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
  },
  step:{
    fontSize:14, 
    fontWeight:'bold',
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
  image:{
    width: 380,
    height: 280,
    resizeMode:'contain',
    borderRadius: 25,
  }
  });

