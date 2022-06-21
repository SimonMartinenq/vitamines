import { View, Image, TextInput ,StyleSheet,KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native'
import React, { useEffect , useState} from 'react'
import { auth , db} from '../firebase'
import { useNavigation } from '@react-navigation/native'
import SelectBox from 'react-native-multi-selectbox'
import SignUp from '../screens/SignUp'
import logo from "../assets/images/logo.png";
import Colors from 'react-native-multi-selectbox/src/constants/Colors'
import ForgotPassword from './ForgotPassword'

function About_us(){
    return (
        <View style={styles.container}>
            <Text style={styles.txttittle}>About us page</Text>
            <View>
                <Text style={styles.box}>je bz ta mer la chienne</Text>
            </View>
        </View>
        
        
    )
}
    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#F1F1F1',
            borderWidth: 1,
            borderColor: 'black',
        },
        box: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            borderColor: 'blue',
            borderWidth: 1,
            borderRadius: 30,
            padding: 20,
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


export default About_us;