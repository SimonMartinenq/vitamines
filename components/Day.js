import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, FlatList} from "react-native";

import MealBox from "./MealBox";



function Day ({day, data}) {

  return (
    <View style={{height:680, width:280, marginLeft: 15, borderColor:'black', borderWidth: 1, borderRadius: 30, backgroundColor:'#D26767'}}>
        <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:'20'}}>{day}</Text>
        </View>
        <View style={{alignItems:'center'}}>
            <FlatList
            data={data?.meals}
            renderItem={({ item }) =><MealBox meal={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />     
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E5E4E4',
    },
    align:{
        //flexDirection: "row",
        //color: 'black',
        //backgroundColor: '#D26767',
        //fontWeight: 'bold',
        //fontSize: 20,
        //borderColor: 'black',
        //borderWidth: 2,
        //borderRadius: 30,
        padding: 5,
        justifyContent:'center',
        alignItems:'center',
        marginTop: '2%',
        //marginBottom: '2%',
        //marginLeft: '16%',
        //marginRight: '16%',
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
        marginLeft: '10%',
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
})

export default Day;
