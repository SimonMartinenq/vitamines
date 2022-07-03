import { View , SafeAreaView,Image, TextInput, Text, StyleSheet, FlatList, ScrollView} from 'react-native'
import { auth , db} from '../firebase'
import {CircleButton, ReceipeCard} from '../components'
import { assets, COLORS, SIZES} from '../constants'
import { useState , useEffect} from 'react'
import { apiKey } from '../constants/api'

const Favoris = () => {
    const [mealData,setMealData] = useState(null);
    const [nbrFav, setNbrFav] = useState(0)
    
    const handleSearch = (value) => {
      if (value.length === 0) {
        setMealData(mealData);
      }
      const filteredData = mealData.filter((item) =>
        item.results[0].title.toLowerCase().includes(value.toLowerCase())
      );
  
      if (filteredData.length === 0) {
        setMealData(mealData);
      } else {
        setMealData(filteredData);
      }
    };

    const getFavoris = async () => {
    db
        .collection('Users')
        .doc(auth.currentUser.uid)
        .get()
        .then((querySnapshot) => {
            const dic = querySnapshot.data()
            return dic.favoris
        })
        .then((array) => {
          setNbrFav(array.length)
          let favTab = []
          array.forEach(element => {
            fetch(
              `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&titleMatch=${element}&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&addRecipeInformation=true`

            )
            .then(response => response.json())
            .then((data) => {
              favTab.push(data)
              setMealData(favTab)
              //console.log("\n\n\n\n\n\n\n\n\n\n\nLISTS OF DISHES\n",favTab)
            })
            .catch(() => {
              console.log("error")
            })
          })
        })
        
    };
      
    useEffect(() => {
        getFavoris();
    }, []);

    function AffichageFav(){
        if (nbrFav){
            return (
               <View style={{flex:1}}>
                <Text style={styles.textFav}>Your favorites</Text>
                <FlatList
                  data={mealData}
                  renderItem={({ item }) => <ReceipeCard data={item.results[0]} />}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                />
                </View> 
            );
        } else{
            return (
                <View style={styles.containerFav}>
                <Image
                    source={assets.heartbroken}
                    style={{
                    resizeMode: "contain",
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginBottom: '3%',
                    width: 50, 
                    height: 50,
                    }}
                />
                <Text style={styles.textFav}>No recipe saved yet. Add one!</Text></View> 
            );
        }
    }

  return (
    <SafeAreaView style={{backgroundColor: COLORS.primary}}>
        <View style={styles.container}>
            <View style={{backgroundColor: COLORS.primary, alignItems: 'center'}}>
                <Text style={styles.textnavbar}> Favorites </Text>
            </View>
            <View style={{ 
              marginTop: SIZES.font,
              width:"90%"
              }}>
                <View
                    style={styles.searchBarFav}
                >
                <Image
                    source={assets.search}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, marginRight: SIZES.base }}
                />
                <TextInput
                    placeholder="Search through your favorites"
                    placeholderTextColor="gray"
                    style={{ 
                    flex: 1,
                    }}
                    onChangeText={handleSearch}
                />
                </View>
            </View>
        </View>
    
        <View style={{ width:"100%", height:"80%", backgroundColor: "#fff"}}> 
            <AffichageFav/>
        </View> 
    </SafeAreaView>
  );
};
export default Favoris;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    height: '20%',
    backgroundColor: COLORS.primary,
    alignItems:'center'
  },
  navbarfav:{
    width: "100%",
    height: "20%",
    marginTop: 10,
    backgroundColor: COLORS.primary,
  },
  textnavbar:{
    fontSize:25,
    marginTop: "auto",
    marginBottom: "auto",
  },
  textFav:{
    width: "70%",
    marginRight:"auto",
    marginLeft: "auto",
    fontSize:18,
    padding:5,
    justifyContent:"center",
    textAlign: "center",
  },
  searchBarFav:{
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
    marginTop: "5%",
  },
  containerFav:{
    flex: 1,
    width: "100%",
    justifyContent: "center",
  }
})
