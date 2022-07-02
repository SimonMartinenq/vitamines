import { View, Image , Text, TouchableOpacity, StyleSheet, Linking} from "react-native";

import { assets } from "../constants";


function MealBox ({meal}) {
  return (
          <TouchableOpacity onPress={() => Linking.openURL(meal.sourceUrl)}>
                <View style={{height:200, width:260,marginBottom: 10, borderColor:'black', borderWidth: 1, borderRadius: 30, backgroundColor:"#F7F5F5"}}>
                <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                    <Text style={{textAlign:'center', fontWeight: 'bold'}}>{meal.title}</Text>
                    <View style={styles.align}>
                        <View>
                            <Image
                            source={assets.timer}
                            style={styles.imagelogo}
                            />
                            <Text>{meal.readyInMinutes}</Text>
                        </View>
                        <View>
                            <Image
                            source={assets.userIcon}
                            style={styles.imagelogo}
                            />
                            <Text>{meal.servings} person</Text>
                        </View>
                        <View style={styles.txtbox}>
                                <Text style={{fontSize: 12, color:'black', textAlign: "center", padding: 2}}>
                                    Click to see your meal in details
                                </Text>
                        </View>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
  );
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

export default MealBox;
