import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = () => {
  const navigation = useNavigation();
  

  const HandlePress = (nom)=>{
    navigation.navigate(nom)
  }
  return (
    <View style={styles.container}>

    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("About_us")}>
      <Ionicons name={"ios-information-circle"} style={styles.icon}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("UserInfo")}>
      <Ionicons name={"ios-person"} style={styles.icon}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
      <Ionicons name={"ios-home"} style={styles.icon}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Favoris")}>
      <Ionicons name={"ios-heart"} style={styles.icon}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Meal_plan")}>
      <Ionicons name={"ios-calendar"} style={styles.icon}/>
    </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    bottom:20,
    left:20,
    right:20,
    elevation:0,
    borderRadius:15,
    height:80,
    backgroundColor:COLORS.white,
    flexDirection:'row',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'space-between',
    padding:'5%'
  },
  icon:{
    fontSize:30
  },
});

export default NavigationBar;