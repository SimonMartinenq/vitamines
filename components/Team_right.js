import React from "react";
import { View, Image , Text, StyleSheet} from "react-native";

import logo from '../assets/images/logo.png'

function Team_right ({mates, info}) {

  return (
    <View style={styles.align2}>
        <View style={styles.decallage}>
            <Text style={styles.txttittle}>{mates}</Text>
            <Text style={styles.txtbox}>{info}</Text>
        </View>
        <View>
            <Image 
                style={styles.imagelogo}
                source={logo}
            />
        </View> 
    </View>
  );
};

const styles = StyleSheet.create({
    align2:{
        flexDirection: "row",
        color: 'black',
        backgroundColor: '#CBC7C7',
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 30,
        padding: 20,
        justifyContent:'center',
        alignItems:'center',
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft: '9.5%',
        marginRight: '9.5%',
    },
    decallage:{
        marginLeft: '10%',
    },
    imagelogo:{
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginLeft: '5%',
        padding: 10
    },
    txttittle:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        textAlign: 'center',
        marginLeft: '10%',
    },
    txtbox:{
        padding: 5,
        textAlign: 'center',
        marginLeft: '10%',
    },
})

export default Team_right;
