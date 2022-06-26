import { View, Image, ScrollView, TextInput ,StyleSheet,KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native'
import React, { useEffect , useState} from 'react'
import { useNavigation } from "@react-navigation/native";

import logo from "../assets/images/logo.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import UserInfo from "../screens/UserInfo";

const Meal_plan = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.back}>
            <ScrollView scrollEventThrottle={16}>
                <View style={styles.container}>
                    <Text style={styles.tittle}>Meal Plan page</Text>

                    
                    
                    <View style={{flex:1, backgroundColor: 'white', padding: 20}}>
                        <Text style={{fontSize:24, fontWeight: '700'}}>
                            Here you can choose the day in order to access to your meal plan of this day.
                        </Text>

                        
                    </View>
                    <View style={{height:75, marginTop:30}}>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>

                            <TouchableOpacity onPress={() => navigation.navigate(UserInfo)}>
                                <View style={{height:50, width:120, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                    <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                        <Text style={{textAlign:'center'}}>Monday</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            

                            <View style={{height:50, width:120, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                    <Text style={{textAlign:'center'}}>Tuesday</Text>
                                </View>
                            </View>

                            <View style={{height:50, width:120, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                    <Text style={{textAlign:'center'}}>Wednesday</Text>
                                </View>
                            </View>

                            <View style={{height:50, width:120, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                    <Text style={{textAlign:'center'}}>Thursday</Text>
                                </View>
                            </View>

                            <View style={{height:50, width:120, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                    <Text style={{textAlign:'center'}}>Friday</Text>
                                </View>
                            </View>

                            <View style={{height:50, width:120, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                    <Text style={{textAlign:'center'}}>Saturday</Text>
                                </View>
                            </View>

                            <View style={{height:50, width:120, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                    <Text style={{textAlign:'center'}}>Sunday</Text>
                                </View>
                            </View>

                            
                            
                        </ScrollView>
                    </View>



                    <View style={{height:450, marginTop:10}}>
                    <Text style={{fontWeight:'bold', fontSize:'28', padding: 10}}>Monday</Text>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>

                            <View style={{height:350, width:250, marginLeft: 15, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                    <Text style={{textAlign:'center'}}>Breakfast</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <TouchableOpacity onPress={() => navigation.navigate(UserInfo)}>
                                        <View style={{height:100, width:220,marginBottom: 5, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                        <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                            <Text style={{textAlign:'center', fontWeight: 'bold'}}>Entrée</Text>
                                            <View style={styles.align}>
                                                <View>
                                                    <Image 
                                                        style={styles.imagelogoleft}
                                                        source={logo}
                                                    />
                                                </View>
                                                <View style={styles.txtbox}>
                                                    <Text style={{fontWeight:'bold', fontSize: 15, color:'black', textAlign: "center"}}>Nom de la recette</Text>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: 'pink',
                                                        padding: 2,
                                                        borderRadius: 20,
                                                    }}>
                                                        <Text style={{fontSize: 12, color:'black', textAlign: "center"}}>
                                                            Voir la recette
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate(UserInfo)}>
                                        <View style={{height:100, width:220,marginBottom: 5, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                        <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                            <Text style={{textAlign:'center', fontWeight: 'bold'}}>Plat</Text>
                                            <View style={styles.align}>
                                                <View>
                                                    <Image 
                                                        style={styles.imagelogoleft}
                                                        source={logo}
                                                    />
                                                </View>
                                                <View style={styles.txtbox}>
                                                    <Text style={{fontWeight:'bold', fontSize: 15, color:'black', textAlign: "center"}}>Nom de la recette</Text>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: 'pink',
                                                        padding: 2,
                                                        borderRadius: 20,
                                                    }}>
                                                        <Text style={{fontSize: 12, color:'black', textAlign: "center"}}>
                                                            Voir la recette
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate(UserInfo)}>
                                        <View style={{height:100, width:220,marginBottom: 5, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                        <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                            <Text style={{textAlign:'center', fontWeight: 'bold'}}>Dessert</Text>
                                            <View style={styles.align}>
                                                <View>
                                                    <Image 
                                                        style={styles.imagelogoleft}
                                                        source={logo}
                                                    />
                                                </View>
                                                <View style={styles.txtbox}>
                                                    <Text style={{fontWeight:'bold', fontSize: 15, color:'black', textAlign: "center"}}>Nom de la recette</Text>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: 'pink',
                                                        padding: 2,
                                                        borderRadius: 20,
                                                    }}>
                                                        <Text style={{fontSize: 12, color:'black', textAlign: "center"}}>
                                                            Voir la recette
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{height:350, width:250, marginLeft: 15, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                    <Text style={{textAlign:'center'}}>Lunch</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <TouchableOpacity onPress={() => navigation.navigate(UserInfo)}>
                                        <View style={{height:100, width:220,marginBottom: 5, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                        <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                            <Text style={{textAlign:'center', fontWeight: 'bold'}}>Entrée</Text>
                                            <View style={styles.align}>
                                                <View>
                                                    <Image 
                                                        style={styles.imagelogoleft}
                                                        source={logo}
                                                    />
                                                </View>
                                                <View style={styles.txtbox}>
                                                    <Text style={{fontWeight:'bold', fontSize: 15, color:'black', textAlign: "center"}}>Nom de la recette</Text>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: 'pink',
                                                        padding: 2,
                                                        borderRadius: 20,
                                                    }}>
                                                        <Text style={{fontSize: 12, color:'black', textAlign: "center"}}>
                                                            Voir la recette
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate(UserInfo)}>
                                        <View style={{height:100, width:220,marginBottom: 5, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                        <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                            <Text style={{textAlign:'center', fontWeight: 'bold'}}>Plat</Text>
                                            <View style={styles.align}>
                                                <View>
                                                    <Image 
                                                        style={styles.imagelogoleft}
                                                        source={logo}
                                                    />
                                                </View>
                                                <View style={styles.txtbox}>
                                                    <Text style={{fontWeight:'bold', fontSize: 15, color:'black', textAlign: "center"}}>Nom de la recette</Text>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: 'pink',
                                                        padding: 2,
                                                        borderRadius: 20,
                                                    }}>
                                                        <Text style={{fontSize: 12, color:'black', textAlign: "center"}}>
                                                            Voir la recette
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate(UserInfo)}>
                                        <View style={{height:100, width:220,marginBottom: 5, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                        <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                            <Text style={{textAlign:'center', fontWeight: 'bold'}}>Dessert</Text>
                                            <View style={styles.align}>
                                                <View>
                                                    <Image 
                                                        style={styles.imagelogoleft}
                                                        source={logo}
                                                    />
                                                </View>
                                                <View style={styles.txtbox}>
                                                    <Text style={{fontWeight:'bold', fontSize: 15, color:'black', textAlign: "center"}}>Nom de la recette</Text>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: 'pink',
                                                        padding: 2,
                                                        borderRadius: 20,
                                                    }}>
                                                        <Text style={{fontSize: 12, color:'black', textAlign: "center"}}>
                                                            Voir la recette
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{height:350, width:250, marginLeft: 15, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                    <Text style={{textAlign:'center'}}>Dinner</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <TouchableOpacity onPress={() => navigation.navigate(UserInfo)}>
                                        <View style={{height:100, width:220,marginBottom: 5, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                        <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                            <Text style={{textAlign:'center', fontWeight: 'bold'}}>Entrée</Text>
                                            <View style={styles.align}>
                                                <View>
                                                    <Image 
                                                        style={styles.imagelogoleft}
                                                        source={logo}
                                                    />
                                                </View>
                                                <View style={styles.txtbox}>
                                                    <Text style={{fontWeight:'bold', fontSize: 15, color:'black', textAlign: "center"}}>Nom de la recette</Text>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: 'pink',
                                                        padding: 2,
                                                        borderRadius: 20,
                                                    }}>
                                                        <Text style={{fontSize: 12, color:'black', textAlign: "center"}}>
                                                            Voir la recette
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate(UserInfo)}>
                                        <View style={{height:100, width:220,marginBottom: 5, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                        <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                            <Text style={{textAlign:'center', fontWeight: 'bold'}}>Plat</Text>
                                            <View style={styles.align}>
                                                <View>
                                                    <Image 
                                                        style={styles.imagelogoleft}
                                                        source={logo}
                                                    />
                                                </View>
                                                <View style={styles.txtbox}>
                                                    <Text style={{fontWeight:'bold', fontSize: 15, color:'black', textAlign: "center"}}>Nom de la recette</Text>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: 'pink',
                                                        padding: 2,
                                                        borderRadius: 20,
                                                    }}>
                                                        <Text style={{fontSize: 12, color:'black', textAlign: "center"}}>
                                                            Voir la recette
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate(UserInfo)}>
                                        <View style={{height:100, width:220,marginBottom: 5, borderColor:'black', borderWidth: 1, borderRadius: 30}}>
                                        <View style={{flex:1, paddingLeft: 10,paddingRight:10, paddingTop: 10}}>
                                            <Text style={{textAlign:'center', fontWeight: 'bold'}}>Dessert</Text>
                                            <View style={styles.align}>
                                                <View>
                                                    <Image 
                                                        style={styles.imagelogoleft}
                                                        source={logo}
                                                    />
                                                </View>
                                                <View style={styles.txtbox}>
                                                    <Text style={{fontWeight:'bold', fontSize: 15, color:'black', textAlign: "center"}}>Nom de la recette</Text>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: 'pink',
                                                        padding: 2,
                                                        borderRadius: 20,
                                                    }}>
                                                        <Text style={{fontSize: 12, color:'black', textAlign: "center"}}>
                                                            Voir la recette
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

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
            backgroundColor:'#F1F1F1',
        },
        align:{
            flexDirection: "row",
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
            backgroundColor: "#F1F1F1",
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
            width: 30,
            height: 30,
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
            padding: 5,
            textAlign: 'center',
        },
        txtbox:{
            padding: 5,
            textAlign: 'center',
            marginLeft: '5%',
        },
    })


export default Meal_plan;