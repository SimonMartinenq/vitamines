
import { View, Text, SafeAreaView, Image, StatusBar, FlatList ,StyleSheet,ScrollView, TouchableOpacity} from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import { useState } from "react";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

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
      
      <Image 
        source={{uri : data.image}}
        resizeMode='contain'
        style={styles.image}
        />
        
        <FlatList
            data={data["analyzedInstructions"][0].steps}
            renderItem={({ item }) => <Text style={styles.text}>{item.step}{"\n"}</Text>}
            keyExtractor={(item) => item.number}
            showsVerticalScrollIndicator={false}
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
