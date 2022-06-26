import { View , SafeAreaView,Image, TextInput, Text, StyleSheet, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { auth , db} from '../firebase'
import {CircleButton, NFTCard} from '../components'
import { assets, COLORS, SIZES} from '../constants'
import { useState , useEffect} from 'react'


const Favoris = ({ onSearch }) => {
    const navigation = useNavigation();
    const [mealData,setMealData] = useState(null);
    const [nbrFav, setNbrFav] = useState(0)
      
    const getFavoris = async () => {
    db
        .collection('Users')
        .doc(auth.currentUser.uid)
        .get()
        .then((querySnapshot) => {
            const dic = querySnapshot.data()
            console.log(dic);
            return dic.favoris
        })
        .then((array) => {
          setNbrFav(array.length)
          let favTab = []
          array.forEach(element => {
            fetch(
              `https://api.spoonacular.com/recipes/${element}/information?apiKey=9ddf84b242c4417f8ac96d8a6ac16ef3&includeNutrition=false`
            )
            //?apiKey=1271db9043d840aeaf257403b2962d77
            .then(response => response.json())
            .then((data) => {
              favTab.push(data)
              setMealData(favTab)
              console.log("\n\n\n\n\n\n\n\n\n\n\nLISTES DES PLATS\n",favTab)
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
                <Text style={styles.textFav}>Vos Favoris </Text>
                <FlatList
                  data={mealData}
                  renderItem={({ item }) => <NFTCard data={item} />}
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
                <Text style={styles.textFav}>Aucune recette sauvegardée pour le moment. Ajoutez-en une ! </Text></View> 
            );
        }
    }

  return (
    <SafeAreaView style={{backgroundColor: COLORS.primary}}>
        <View style={styles.container}>
            <View style={{backgroundColor: COLORS.primary, alignItems: 'center'}}>
                 <CircleButton
                    imgUrl={assets.left}
                    handlePress={() => navigation.goBack("Home")}
                    left={15}
                />
                <Text style={styles.textnavbar}> Favoris </Text>
            </View>
            <View style={{ marginTop: SIZES.font }}>
                <View
                    style={styles.searchBarFav}
                >
                <Image
                    source={assets.search}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, marginRight: SIZES.base }}
                />
                <TextInput
                    placeholder="Trouver une recette, un aliment,..."
                    placeholderTextColor="gray"
                    style={{ 
                    flex: 1,
                    }}
                    onChangeText={onSearch}
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
