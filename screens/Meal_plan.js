import { View, Image, ScrollView, TextInput ,StyleSheet,KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native'
import React, { useEffect , useState} from 'react'
import logo from "../assets/images/logo.png";
import { SafeAreaView } from 'react-native-safe-area-context';

function Meal_plan(){
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
                    <View style={{height:150, marginTop:30}}>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                            <View style={{height:150, width:150, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:2}}>
                                    <Image source={require('../assets/users/vivi.jpg')}
                                    style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
                                </View>
                                <View style={{flex:1, paddingLeft: 10, paddingTop: 10}}>
                                    <Text>Monday</Text>
                                </View>
                            </View>

                            <View style={{height:150, width:150, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:2}}>
                                    <Image source={require('../assets/users/vivi.jpg')}
                                    style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
                                </View>
                                <View style={{flex:1, paddingLeft: 10, paddingTop: 10}}>
                                    <Text>Tuesday</Text>
                                </View>
                            </View>

                            <View style={{height:150, width:150, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:2}}>
                                    <Image source={require('../assets/users/vivi.jpg')}
                                    style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
                                </View>
                                <View style={{flex:1, paddingLeft: 10, paddingTop: 10}}>
                                    <Text>Wednesday</Text>
                                </View>
                            </View>

                            <View style={{height:150, width:150, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:2}}>
                                    <Image source={require('../assets/users/vivi.jpg')}
                                    style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
                                </View>
                                <View style={{flex:1, paddingLeft: 10, paddingTop: 10}}>
                                    <Text>Thursday</Text>
                                </View>
                            </View>

                            <View style={{height:150, width:150, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:2}}>
                                    <Image source={require('../assets/users/vivi.jpg')}
                                    style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
                                </View>
                                <View style={{flex:1, paddingLeft: 10, paddingTop: 10}}>
                                    <Text>Friday</Text>
                                </View>
                            </View>

                            <View style={{height:150, width:150, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:2}}>
                                    <Image source={require('../assets/users/vivi.jpg')}
                                    style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
                                </View>
                                <View style={{flex:1, paddingLeft: 10, paddingTop: 10}}>
                                    <Text>Saturday</Text>
                                </View>
                            </View>

                            <View style={{height:150, width:150, marginLeft: 15, borderColor:'black', borderWidth: 1}}>
                                <View style={{flex:2}}>
                                    <Image source={require('../assets/users/vivi.jpg')}
                                    style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
                                </View>
                                <View style={{flex:1, paddingLeft: 10, paddingTop: 10}}>
                                    <Text>Sunday</Text>
                                </View>
                            </View>
                            
                        </ScrollView>
                    </View>





                    <View style={styles.align}>
                        <View>
                            <Image 
                                style={styles.imagelogoleft}
                                source={logo}
                            />
                        </View>
                        <View>
                            <Text style={styles.txttittle}>Mael Gueguen</Text>
                            <Text style={styles.txtbox}>Généralement les professeurs de français recommandent à leurs élèves de ne pas faire de phrases trop longues. Victor Hugo ou Marcel Proust n’ont pas vraiment respecté ce principe. Chez Proust, les phrases comptent en moyenne 43 mots contre une vingtaine en moyenne chez les écrivains de langue française.</Text>
                        </View>
                    </View>
                    <View style={styles.align2}>
                        <View style={styles.decallage}>
                            <Text style={styles.txttittle}>Mael Gueguen</Text>
                            <Text style={styles.txtbox}>Généralement les professeurs de français recommandent à leurs élèves de ne pas faire de phrases trop longues. Victor Hugo ou Marcel Proust n’ont pas vraiment respecté ce principe. Chez Proust, les phrases comptent en moyenne 43 mots contre une vingtaine en moyenne chez les écrivains de langue française.</Text>
                        </View>
                        <View>
                            <Image 
                                style={styles.imagelogo}
                                source={logo}
                            />
                        </View> 
                    </View>
                    <View style={styles.align}>
                        <View>
                            <Image 
                                style={styles.imagelogoleft}
                                source={logo}
                            />
                        </View>
                        <View>
                            <Text style={styles.txttittle}>Mael Gueguen</Text>
                            <Text style={styles.txtbox}>Généralement les professeurs de français recommandent à leurs élèves de ne pas faire de phrases trop longues. Victor Hugo ou Marcel Proust n’ont pas vraiment respecté ce principe. Chez Proust, les phrases comptent en moyenne 43 mots contre une vingtaine en moyenne chez les écrivains de langue française.</Text>
                        </View>
                    </View>
                    <View style={styles.align2}>
                        <View style={styles.decallage}>
                            <Text style={styles.txttittle}>Mael Gueguen</Text>
                            <Text style={styles.txtbox}>Généralement les professeurs de français recommandent à leurs élèves de ne pas faire de phrases trop longues. Victor Hugo ou Marcel Proust n’ont pas vraiment respecté ce principe. Chez Proust, les phrases comptent en moyenne 43 mots contre une vingtaine en moyenne chez les écrivains de langue française.</Text>
                        </View>
                        <View>
                            <Image 
                                style={styles.imagelogo}
                                source={logo}
                            />
                        </View> 
                    </View>
                    <View style={styles.align}>
                        <View>
                            <Image 
                                style={styles.imagelogoleft}
                                source={logo}
                            />
                        </View>
                        <View>
                            <Text style={styles.txttittle}>Mael Gueguen</Text>
                            <Text style={styles.txtbox}>Généralement les professeurs de français recommandent à leurs élèves de ne pas faire de phrases trop longues. Victor Hugo ou Marcel Proust n’ont pas vraiment respecté ce principe. Chez Proust, les phrases comptent en moyenne 43 mots contre une vingtaine en moyenne chez les écrivains de langue française.</Text>
                        </View>
                    </View>
                    <View style={styles.align2}>
                        <View style={styles.decallage}>
                            <Text style={styles.txttittle}>Mael Gueguen</Text>
                            <Text style={styles.txtbox}>Généralement les professeurs de français recommandent à leurs élèves de ne pas faire de phrases trop longues. Victor Hugo ou Marcel Proust n’ont pas vraiment respecté ce principe. Chez Proust, les phrases comptent en moyenne 43 mots contre une vingtaine en moyenne chez les écrivains de langue française.</Text>
                        </View>
                        <View>
                            <Image 
                                style={styles.imagelogo}
                                source={logo}
                            />
                        </View> 
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
        back:{
            backgroundColor: "#F1F1F1",
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
        imagelogoleft:{
            width: 100,
            height: 100,
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
        tittle:{
            fontWeight: 'bold',
            fontSize: 28,
            padding: 5,
            textAlign: 'center',
        },
        txtbox:{
            padding: 5,
            textAlign: 'center',
            marginLeft: '10%',
        },
    })


export default Meal_plan;