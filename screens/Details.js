
import { View, Text, SafeAreaView, Image, StatusBar, FlatList ,StyleSheet,ScrollView, TouchableOpacity} from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import { useState } from "react";
import RecetteHeader from "../components/RecetteHeader";
import RecetteCard from "../components/RecetteCard"


const Details = ({ route }) => {

  const { data } = route.params;
  const tabEquipment = data["analyzedInstructions"][0].steps[0].equipment;
  const tabIngredients = data["analyzedInstructions"][0].steps[0].ingredients;
  const tabStep = data["analyzedInstructions"][0].steps[0].step;

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
        <FlatList
            data={data["analyzedInstructions"][0].steps}
            renderItem={({ item }) => <RecetteCard data={item}/>}
            keyExtractor={(item) => item.number}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<RecetteHeader data={data} />}
          />
      
    </SafeAreaView>
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


export default Details;
