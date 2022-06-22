import { View , Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { auth , db} from '../firebase'
import { CircleButton, MealList} from '../components'
import { assets } from '../constants'
import { useState , useEffect} from 'react'



export default function UserInfo() {
  
  const navigation = useNavigation();
  const [user,setUser] = useState(null);
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(()=>{
        navigation.replace("LoginScreen")
      })
      .catch(error => alert(error.message))
  }
  
  const getUser = async () => {
      db
        .collection('Users')
        .doc(auth.currentUser.uid)
        .get()
        .then((querySnapshot) => {
            const dic = querySnapshot.data()
            setUser(dic);
          });
  };

  const handleChange = () => {setCalories(calories)};

  const getMeal = () => {
    fetch(
      "https://api.spoonacular.com/recipes/generate?apiKey=1271db9043d840aeaf257403b2962d77&timeFrame=day&targetCalories=2000"
    )
    .then(response => response.json())
    .then((data) => {
      setMealData(data)
      console.log(data)
    })
    .catch(() => {
      console.log("error")
    })
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={{
      width: "100%", 
      height: 373,
      flex:1,
      alignItems:'center',
      justifyContent:'center'
      }}>
        <TextInput
        placeholder="calories"
        placeholderTextColor="grey"
        value={calories}
        onChangeText={handleChange}
        style={styles.input}
        />
        <TouchableOpacity
        onPress={getMeal}
        style={styles.button}
        >
            <Text style={styles.buttonText}>get meal</Text>
        </TouchableOpacity>

      <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack("Home")}
      left={15}
      flex={1}
      />
      <View style={{justifyContent:'flex-start'}}>
        <Text>Nom : {user?.nom}</Text>
        <Text>Age : {user?.age} ans</Text>
        <Text>Objectif : {user?.objectif}</Text>
        <Text>Poids : {user?.poid} Kg</Text>
        <Text>Taille : {user?.taille}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#D9D9D9'
  },
  inputcontainer:{
      width:'80%',
      

  },
  input:{
      backgroundColor:'white',
      paddingHorizontal: 15,
      paddingVertical:10,
      borderRadius:10,
      marginTop:5,
      
  },
  buttonContainer:{
      width:'60%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:40,
  },
  button:{
     backgroundColor:'#D26767',
     width:'100%',
     padding:15,
     borderRadius:10,
     alignItems:'center'
  },
  buttonOutline:{
      backgroundColor:'white',
      marginTop:5,
      borderColor:'#D26767',
      borderWidth:2,
  },
  buttonText:{
      color:'white',
      fontWeight:'700',
      fontSize:16,
  },
  buttonOutlineText:{
      color:'#D26767',
      fontWeight:'700',
      fontSize:16,
  },
})
