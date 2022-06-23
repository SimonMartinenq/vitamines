import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList , Button,Text,Image} from "react-native";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";




const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  
  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  const handleChange = () => {setCalories(calories)};

  const getMeal = () => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=1271db9043d840aeaf257403b2962d77&query=pasta&maxFat=25&number=8"
    )
    //?apiKey=1271db9043d840aeaf257403b2962d77
    .then(response => response.json())
    .then((data) => {
      setMealData(data.results)
      console.log("\n\n\n\n\n\n\n\n\n\n\nLISTES DES PLATS\n",data.results)
    })
    .catch(() => {
      console.log("error")
    })
  };

  useEffect(() => {
    getMeal();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
      <View>
        </View>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={mealData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.primary }} />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default Home;
