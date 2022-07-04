import {React } from "react";
import { View, Text, Image,StyleSheet,FlatList,Button,Linking } from "react-native";
import {COLORS, SIZES, assets} from "../constants";

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
      <Text style={{fontSize:20, fontWeight:'bold', marginTop:'5%', textAlign:'center'}}>Nutrients</Text>
 
      <View style={styles.align}>
        <Text style={styles.txtnutrients}>{data.nutrition.nutrients[0].name} : {data.nutrition.nutrients[0].amount} {data.nutrition.nutrients[0].unit}</Text>
        <Text style={styles.txtnutrients}>{data.nutrition.nutrients[3].name} : {data.nutrition.nutrients[3].amount} {data.nutrition.nutrients[3].unit}</Text>
        <Text style={styles.txtnutrients}>{data.nutrition.nutrients[5].name} : {data.nutrition.nutrients[5].amount} {data.nutrition.nutrients[5].unit}</Text>
        <Text style={styles.txtnutrients}>{data.nutrition.nutrients[10].name} : {data.nutrition.nutrients[10].amount} {data.nutrition.nutrients[10].unit}</Text>
        <Text style={styles.txtnutrients}>{data.nutrition.nutrients[15].name} : {data.nutrition.nutrients[15].amount} {data.nutrition.nutrients[15].unit}</Text>
      </View>

        {/*<FlatList
          data={data.nutrition.nutrients}
          renderItem={({ item }) => <Text>{item.name} {item.amount} {item.unit} ({item.percentOfDailyNeeds}% of daily needs)</Text>}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}         
        />*/}
        <View
        style={{
          alignItems:"center",
        }}
        >
          <Button
          title="View original reciepe"
          onPress={()=> Linking.openURL(data.sourceUrl)}
          />
        </View>
        
        <View style={{justifyContent:'center',
        alignItems:'center',
        marginBottom:'25%'}}>
          <Image 
          source={assets.CO2}
          style={styles.image}
          />
        </View> 

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
        paddingTop:40,
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
      <View style={styles.subInfo}>
          <View style={styles.box}>
              <Image
              source={assets.timer}
              style={styles.imagelogo}
              />
              <Text>{data.readyInMinutes} min</Text>
          </View>
          <View style={styles.box}>
              <Image
              source={assets.userIcon}
              style={styles.imagelogo}
              />
              <Text>{data.servings} person</Text>
          </View>
          <View style={styles.box}>
              <Image
              source={assets.meal}
              style={styles.imagelogo}
              />
              <Text>${Math.round(data.pricePerServing/100)}</Text>
          </View>
          <View style={styles.box}>
              <Image
              source={assets.healthyEating}
              style={styles.imagelogo}
              />
              <Text style={styles.txtsubtittle}>{data.healthScore}%</Text>
          </View>
      </View>
        
        
        

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
      backgroundColor: COLORS.white,
      borderRadius: 10,
      padding: '3%',
      paddingBottom:'4%',
      marginTop: '5%',
      marginBottom: '5%',
  },
  stepbox:{
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 2,
    margin:'1%',
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
    marginLeft: '10%',
    color:COLORS.primary
  },
  step:{
    fontSize:14, 
    fontWeight:'bold',
    marginLeft: '5%',
    color:COLORS.primary,
    padding:'3%',
    
    marginBottom:'1%'
  },
  txtlist:{
    fontSize: 14,
    marginLeft: '15%',
    
  },
  txtnutrients:{
    fontSize: 16,
    textAlign: 'center',
    padding:'1%'

  },
  txtstep:{
    fontSize: 14,
    marginLeft: '10%',
    textAlign:'justify',
    marginRight: '10%',
    marginBottom:'3%'
  },
  image:{
    width: 380,
    height: 280,
    resizeMode:'contain',
    borderRadius: 10,
  },
  imagelogo:{
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginLeft: '5%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box:{
    justifyContent:'center',
    alignItems:'center',
    margin: '10%',
},
  subInfo:{
    flexDirection: "row",
    padding: 5,
    justifyContent:'center',
    alignItems:'center',
    marginTop: '2%',
    marginLeft: '20%',
    marginRight: '16%',
  },
  });

