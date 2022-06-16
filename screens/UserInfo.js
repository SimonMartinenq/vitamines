import React from 'react'
import { View , Text, TouchableOpacity, StyleSheet,StatusBar} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { auth } from '../firebase'
import { CircleButton } from '../components'
import { assets } from '../constants'



export default function UserInfo() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(()=>{
        navigation.replace("LoginScreen")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={{
      width: "100%", 
      height: 373,
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>
      <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack("Home")}
      left={15}
      
    />
      <Text>
      {/* on mets ? au cas ou l'email est undefine */}
      Email : {auth.currentUser?.email} 
      </Text>
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
