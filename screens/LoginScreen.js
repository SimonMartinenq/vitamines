import { View, TextInput ,StyleSheet,KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native'
import React, { useEffect , useState} from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'



const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.navigate("Home")
            }
        })
        return unsubscribe
    },[])

    const hanfleSignUp = () =>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Register with",user.email);
        })
        .catch(error => alert(error.message))
    }
    const hanfleLogin = () =>{
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Login with :",user.email);
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
        onChangeText={text =>setEmail(text)}
        style={styles.input}
        />
        <TextInput
        placeholder="Password"
        value={password }
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={hanfleLogin}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={hanfleSignUp}
        style={[styles.button,styles.buttonOutline] }
        >
            <Text style={styles.buttonOutlineText}>Register</Text>
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
    },
    buttonOutlineText:{
        color:'#D26767',
        fontWeight:'700',
        fontSize:16,
    },
})

export default LoginScreen