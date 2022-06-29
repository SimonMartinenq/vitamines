import React, { useEffect , useState} from 'react'
import { View,Text, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import { CircleButton } from '../components'
import { assets } from '../constants'

function ForgotPassword() {

  const [email, setEmail] = useState('')
  const navigation = useNavigation();

  const HandleReset = () =>{
      auth
      .sendPasswordResetEmail(email)
      .then(() => {
          console.log("email send to :", email);
          navigation.goBack()
      })
      .catch(error => alert(error.message))
  }





  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
      <View  style={styles.inputcontainer}>
        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text =>setEmail(text.toLowerCase())}
        style={styles.input}
        />        
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={HandleReset}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Send the verification email</Text>
        </TouchableOpacity>
      </View>
     
    </KeyboardAvoidingView>
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
      textAlign:'center',
  },
  buttonOutlineText:{
      color:'#D26767',
      fontWeight:'700',
      fontSize:16,
  },
})


export default ForgotPassword;