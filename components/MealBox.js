import { View, Image , Text, TouchableOpacity, StyleSheet, Linking} from "react-native";
import { assets } from "../constants";

function MealBox ({meal}) {
  return (
          <TouchableOpacity onPress={() => Linking.openURL(meal.sourceUrl)}>
                <View style={{height:180, width:260,marginBottom: 10, borderColor:'black', borderWidth: 1, borderRadius: 30, backgroundColor:"#F7F5F5"}}>
                <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                    <Text style={{textAlign:'center', fontWeight: 'bold'}}>{meal.title}</Text>
                    <View style={styles.align}>
                        <View style={styles.box}>
                            <Image
                            source={assets.timer}
                            style={styles.imagelogo}
                            />
                            <Text>{meal.readyInMinutes} min</Text>
                        </View>
                        <View style={styles.box}>
                            <Image
                            source={assets.userIcon}
                            style={styles.imagelogo}
                            />
                            <Text>{meal.servings} person</Text>
                        </View>
                    </View>
                    <View style={styles.txtbox}>
                        <Text style={{fontSize: 12, color:'black', textAlign: "center", padding: 2}}>
                            Click to see your meal in details
                        </Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

    align:{
        flexDirection: "row",
        padding: 5,
        justifyContent:'center',
        alignItems:'center',
        marginTop: '2%',
        marginLeft: '20%',
        marginRight: '16%',
    },

    box:{
        justifyContent:'center',
        alignItems:'center',
        margin: '10%',
    },

    imagelogo:{
        width: 25,
        height: 25,
        resizeMode: "contain",
        marginLeft: '5%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtbox:{
        padding: 5,
        textAlign: 'center',
        marginLeft: '5%',
    },
})

export default MealBox;
