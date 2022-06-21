import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, TextInput, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import Feather from 'react-native-vector-icons/Feather;'
import { CircleButton } from '../components'
import { assets } from '../constants'
import { useNavigation } from '@react-navigation/native'
//import BottomSheet from 'reanimated-bottom-sheet';
//import { Animated } from 'react-native-reanimated';

const EditProfilScreen = () => {
    const navigation = useNavigation();

    /*
    const renderInner = () => {
        <Text>Hello</Text>
    }

    const renderHeader = () => {
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    }
    */

    //bs = React.createRef();
    //fall  = new Animated.Value(1);
    const K_OPTIONS = [
        {
          item: "Perdre du poid",
        },
        {
          item: "Mieux manger",
        },
        {
          item:  "Manger pas cher",
        },
      ]

    return (
        <SafeAreaView>
            <View style = {StyleSheet.container}>
                 
                <View style={{margin: 20}}>
                    <View style={{alignItems: 'center'}}>
                        <CircleButton
                            imgUrl={assets.left}
                            handlePress={() => navigation.goBack("UserProfil")}
                            left={15}
                        />
                        <TouchableOpacity onPress={() => this.current.snapPoints(0)}>
                            <View style = {{
                                height: 100,
                                width : 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <ImageBackground
                                    source={require('../assets/users/vivi.jpg')}
                                    style = {{height:100, width: 100}}
                                    imageStyle={{borderRadius: 15}}
                                >
                                    <View style={{
                                        flex : 1,
                                        jsutifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Icon name="camera" size={35} color="#fff" style={{
                                            opacity: 0.7,
                                            alignItems: 'center',
                                            justifyContent : 'center',
                                            borderWidth : 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,
                                            marginTop : 30
                                        }}/>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
                            Victoria Stasik
                        </Text>
                    </View>
                    <View style={styles.action}>
            
                        <TextInput
                            placeholder="Nom"
                            placeholderTextColor='#D26767'
                            autocorrect={false}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.action}>
            
                        <TextInput
                            placeholder="Prénom"
                            placeholderTextColor='#D26767'
                            autocorrect={false}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Âge"
                            placeholderTextColor='#D26767'
                            autocorrect={false}
                            keyboardType= 'number-pad'
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.action}>
                        
                        <TextInput
                            placeholder="Poids (kg)"
                            placeholderTextColor='#D26767'
                            autocorrect={false}
                            keyboardType= 'number-pad'
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="Taille (cm)"
                            placeholderTextColor='#D26767'
                            autocorrect={false}
                            keyboardType= 'number-pad'
                            style={styles.textInput}
                        />
                    </View>
                    <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                        <Text style={styles.panelButtonTitle}>Mettre à jour</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EditProfilScreen;

const styles = StyleSheet.create({
    container: {
        flex : 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#D26767',
        alignItems: 'center',
        marginTop: 10
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    panelHeader: {
        width: 40,
        height: 0,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height : 35
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#D26767',
        alignItems : 'center',
        marginVertical: 7
    },
    panelButtonTitle: {
        fontSize : 17,
        fontWeight: 'bold',
        color: 'white'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: 10,
        paddingLeft: 10,
        color: '#05375a'
    }

});


