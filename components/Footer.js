import {React} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { assets } from "../constants";
import About_us from "../screens/About_us";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate(About_us)}>
        <View style={styles.align}>
            <Image
              source={assets.aboutus}
              resizeMode="contain"
              style={styles.img}
            />
            <Text style ={styles.txt_1}>About us</Text>
          </View>
      </TouchableOpacity>
      <Text style ={styles.txt_2}>&copy;VITAMINES&copy;</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  align:{
    flexDirection: "row",
  },
  img:{
    width: 22,
    height:22,
    marginRight: '2%',
  },
  txt_1:{
    textAlign:'center',
    padding: 5,
    color: 'black',
    fontSize: 15,
    textDecorationLine: "underline"
  },
  txt_2:{
    textAlign:'center',
    padding: 5,
    color: 'black',
  },
  footer:{
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})



export default Footer;