import React from "react";
import { View, Image , Text, StyleSheet} from "react-native";

function Team_left ({mates, info, img}) {

  return (
    <View style={styles.align}>
        <View>
            <Image 
                style={styles.imagelogoleft}
                source={img}
            />
        </View>
        <View>
            <Text style={styles.txttittle}>{mates}</Text>
            <Text style={styles.txtbox}>{info}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    align:{
        flexDirection: "row",
        color: 'black',
        backgroundColor: '#D26767',
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
        marginLeft: '16%',
        marginRight: '16%',
    },
    imagelogoleft:{
        width: 120,
        height: 140,
        resizeMode: "contain",
        marginLeft: '50%',
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

export default Team_left;
