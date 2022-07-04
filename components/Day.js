import React from "react";
import { View, Text, FlatList} from "react-native";

import MealBox from "./MealBox";



function Day ({day, data}) {

  return (
    <View style={{height:"83%", width:280, marginLeft: 15, borderColor:'black', borderWidth: 1, borderRadius: 30, backgroundColor:'#D26767'}}>
        <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}}>{day}</Text>
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

export default Day;
