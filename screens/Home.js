import React, { useState, useEffect } from "react";
import { View,Text, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import { ReceipeCard, HomeHeader, FocusedStatusBar} from "../components";
import { COLORS } from "../constants";
import {apiKey} from "../constants/api";
import { db,auth } from "../firebase";

const Home = () => {
  const [mealData, setMealData] = useState(null);
  const [userInfo,setUser] = useState(null);

  const getUser = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        db
          .collection('Users')
          .doc(uid)
          .get()
          .then((querySnapshot) => {
              const dic = querySnapshot.data()
              setUser(dic);
              //console.log(dic)
            });
      }
    });
  }
  
  const handleSearch = (value) => {
    if (value.length === 0) {
      setMealData(mealData);
    }
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&titleMatch=${value}&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&addRecipeInformation=true&instructionsRequired=true&number=1&intolerances=${userInfo?.intolerence}&diet=${userInfo?.diet}`
        
    )
    .then(response => response.json())
    .then((data) => {
      //console.log("\n\n\n\n\n\n\n\n\n\n\ninfos recettes\n",data)
      setMealData(data.results)
    })
    .catch(() => {
      //console.log("error")
    })
  };

  const getMeal = () => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=healthy&number=1&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&addRecipeInformation=true&intolerances=${userInfo?.intolerence}&diet=${userInfo?.diet}`
        
    )
    .then(response => response.json())
    .then((data) => {
      //console.log("\n\n\n\n\n\n\n\n\n\n\nLISTES DES PLATS\n",data)
      setMealData(data.results)
    })
    .catch(() => {
      //console.log("error")
    })
  };

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getMeal();
  }, [userInfo]);
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={mealData}
            renderItem={({ item }) => <ReceipeCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            ListFooterComponent={<View style={{margin:30}}></View>}
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
