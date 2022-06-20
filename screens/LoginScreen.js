import { View, Image, TextInput ,StyleSheet,KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native'
import React, { useEffect , useState} from 'react'
import { auth , db} from '../firebase'
import { useNavigation } from '@react-navigation/native'
import SelectBox from 'react-native-multi-selectbox'
import SignUp from '../screens/SignUp'
import logo from "../assets/images/logo.png";
import Colors from 'react-native-multi-selectbox/src/constants/Colors'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Home")
            }
        })
        return unsubscribe
    },[])

    const handleLogin = () =>{
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
        <View style={styles.imgcontainer}>
            <Image 
                style={styles.imagelogo}
                source={logo}
            />
            <Text style={styles.txttittle}>Se connecter</Text>
        </View>
        <TextInput
        placeholder="Email"
        placeholderTextColor="grey"
        value={email}
        onChangeText={text =>setEmail(text)}
        style={styles.input}
        />
        <TextInput
        placeholder="Mot de passe"
        placeholderTextColor="grey"
        value={password }
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
        
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate(SignUp)}
        >
            <Text style={styles.underline}>Créer un compte</Text>
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
        backgroundColor:'#F1F1F1'
    },
    underline:{
        textDecorationLine: "underline"
    },
    inputcontainer:{
        width:'80%',
    },
    imgcontainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    imagelogo:{
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    txttittle:{
        fontWeight: 'bold',
        fontSize: 28,
        padding: 5,
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
        //color: "#000000",
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    button:{
       backgroundColor:'#D26767',
       width:'100%',
       padding:15,
       borderRadius:10,
       alignItems:'center',
       marginBottom:15,
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

export default LoginScreen;





