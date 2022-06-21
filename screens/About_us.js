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
            <View style={styles.box}>
                <Image 
                    style={styles.imagelogo}
                    source={logo}
                />
                <Text style={styles.txtbox}>Mael Gueguen</Text>
            </View>
            <View style={styles.box}>
                <Image 
                    style={styles.imagelogo}
                    source={logo}
                />
                <Text style={styles.txtbox}>Anne-julie Hottin</Text>
            </View>
            <View style={styles.box}>
                <Image 
                    style={styles.imagelogo}
                    source={logo}
                />
                <Text style={styles.txtbox}>Victoria Stasik</Text>
            </View>
            <View style={styles.box}>
                <Image 
                    style={styles.imagelogo}
                    source={logo}
                />
                <Text style={styles.txtbox}>Simon Martinenq</Text>
            </View>
            <View style={styles.box}>
                <Image 
                    style={styles.imagelogo}
                    source={logo}
                />
                <Text style={styles.txtbox}>Mike Leveleux</Text>
            </View>
            <View style={styles.box}>
                <Image 
                    style={styles.imagelogo}
                    source={logo}
                />
                <Text style={styles.txtbox}>Théo MASSON</Text>
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
            justifyContent:'center',
            alignItems:'center',
            marginTop: 5,
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
            width: 50,
            height: 50,
            resizeMode: "contain",
        },
        txttittle:{
            fontWeight: 'bold',
            fontSize: 28,
            padding: 5,
        },
        txtbox:{
            padding: 5,
            textAlign: 'center',
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