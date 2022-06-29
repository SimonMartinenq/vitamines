import { View, Image, ScrollView, TextInput ,StyleSheet,KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native'
import React, { useEffect , useState} from 'react'
import { useNavigation } from "@react-navigation/native";

import logo from "../assets/images/logo.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import UserInfo from "../screens/UserInfo";
import Day from '../components/Day';

const Meal_plan = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.back}>
            <ScrollView scrollEventThrottle={16}>
                <View style={styles.container}>             

                    <View style={{height:780, marginTop:10}}>
                    <Text style={styles.tittle}>Meal Plan page</Text> 
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={true}>

                            <Day day={'Monday'}/>
                            <Day day={'Tuesday'}/>
                            <Day day={'Wednesday'}/>
                            <Day day={'Thursday'}/>
                            <Day day={'Friday'}/>
                            <Day day={'Saturday'}/>
                            <Day day={'Sunday'}/>
                            

                        </ScrollView>
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
        
        
    )
}
    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#E5E4E4',
        },
        align:{
            //flexDirection: "row",
            //color: 'black',
            //backgroundColor: '#D26767',
            //fontWeight: 'bold',
            //fontSize: 20,
            //borderColor: 'black',
            //borderWidth: 2,
            //borderRadius: 30,
            padding: 5,
            justifyContent:'center',
            alignItems:'center',
            marginTop: '2%',
            //marginBottom: '2%',
            //marginLeft: '16%',
            //marginRight: '16%',
        },
        
        back:{
            backgroundColor: "#E5E4E4",
        },
        decallage:{
            marginLeft: '10%',
        },
        imagelogo:{
            width: 25,
            height: 25,
            resizeMode: "contain",
            marginLeft: '5%',
            padding: 10
        },
        imagelogoleft:{
            width: 120,
            height: 120,
            resizeMode: "contain",
            //marginLeft: '50%',
        },
        txttittle:{
            fontWeight: 'bold',
            fontSize: 20,
            padding: 5,
            textAlign: 'center',
            marginLeft: '10%',
        },
        tittle:{
            fontWeight: 'bold',
            fontSize: 28,
            padding: 25,
            textAlign: 'center',
        },
        txtbox:{
            padding: 5,
            textAlign: 'center',
            marginLeft: '5%',
        },
    })


export default Meal_plan;