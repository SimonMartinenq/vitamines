
import { useState , useEffect} from "react";
import { SafeAreaView, StatusBar, FlatList ,StyleSheet} from "react-native";

import { FocusedStatusBar } from "../components";

import {RecetteHeader, EtapeCard} from "../components/Recette";
import { apiKeySimon } from "../constants/api";

const Details = ({ route }) => {

  const { data } = route.params;
  const [dataInfos, setDataInfos] = useState(null)

  const getMeal = () => {
    fetch(
      `https://api.spoonacular.com/recipes/${data.id}/information?apiKey=${apiKeySimon}&includeNutrition=false`
      //elle suffit comme requetes il y a les etapes
    )
    //?apiKey=1271db9043d840aeaf257403b2962d77
    .then(response => response.json())
    .then((snap) => {
      console.log("\n\n\n\n\n\n\n\n\n\n\nDATA INFOS\n",snap)
      setMealData(snap)
      
    })
    .catch(() => {
      console.log("error")
    })
  };

  useEffect(() => {
    getMeal();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
        <FlatList
            data={data["analyzedInstructions"][0].steps}
            renderItem={({ item }) => <EtapeCard data={item}/>}
            keyExtractor={(item) => item.number}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<RecetteHeader data={data} dataInfos={dataInfos} />}
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
