import React, { useEffect, useRef, useState } from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, TextInput, Platform, ImagePickerIOS} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CircleButton } from '../components'
import { assets } from '../constants'
import { useNavigation } from '@react-navigation/native'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'react-native-web';
import SelectBox from 'react-native-multi-selectbox'
import { auth , db} from '../firebase'


const EditProfilScreen = () => {
    const navigation = useNavigation();
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            madiaTypes : ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });

        console.log(result);
        if (!result.cancelled){
            setImage(result.uri);
        }
    };

    if (hasGalleryPermission === false){
        return <Text>Vitamines n'a pas accès à la galerie photo!</Text>
    }

    

    renderInner = () => (
        <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.panelTitle}>Importer une photo</Text>
                <Text style={styles.panelSubtitle}>Quel sera votre nouvelle photo de profil?</Text>
            </View>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Prendre Une Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={() => pickImage()}>
                <Text style={styles.panelButtonTitle}>Choisir Dans La Bibliothèque</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Annuler</Text>
            </TouchableOpacity>
        </View> 
    );

    renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandel}></View>
            </View>
        </View>
    );

    bs = React.createRef();
    fall  = new Animated.Value(1);
    
    const K_OPTIONS = [
        {
            item: "Lose weight",
        },
        {
            item: "Eat better",
        },
        {
            item:  "Eat cheap",
        },
      ]

    const [age, setAge] = useState('')
    const [poid, setPoid] = useState('')
    const [taille, setTaille] = useState('')
    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [objectif, setObjectif] = useState({})

    const editUser = async() => {
        var userRef = db.collection("Users");
    
        userRef.doc(auth.currentUser.uid).update({
            nom:nom,
            prenom:prenom,
            age:age,
            poid:poid,
            taille:taille.toLowerCase(),
            objectif:objectif.item.toLowerCase()
            })
        .then(() => {
          console.log("User successfully create!");
        })
        .catch((error) => {
          console.error("Error creating document: ", error);
        });
        navigation.navigate('UserInfo')
    }

    
    const getUser = async () => {
        db
          .collection('Users')
          .doc(auth.currentUser.uid)
          .get()
          .then((querySnapshot) => {
              const dic = querySnapshot.data()
              setUser(dic);
            });
    };
  
    useEffect(() => {
      getUser();
    }, []);

    
    return (
        <SafeAreaView>
            <View style = {StyleSheet.container}>
                <BottomSheet
                    ref={this.bs}
                    snapPoints={[400, 0]}
                    renderContent={this.renderInner}
                    renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                /> 
                <Animated.View style={{margin: 20,
                opacity: Animated.add(0.3, Animated.multiply(this.fall, 1.0)),
                }}>
                    <View style={{alignItems: 'center'}}>
                        <CircleButton
                            imgUrl={assets.left}
                            handlePress={() => navigation.goBack("UserProfil")}
                            left={15} 
                        />
                        <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                            <View style = {{
                                height: 100,
                                width : 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <ImageBackground
                                    source={require('../assets/icons/user.png')}
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
                            Please enter all the information
                        </Text>
                    </View>
                    <View style={styles.action}>
            
                        <TextInput
                            placeholder="Lastname *"
                            placeholderTextColor='#D26767'
                            autocorrect={false}
                            style={styles.textInput}
                            value={nom}
                            onChangeText={text => setNom(text)}
                        />
                    </View>
                    <View style={styles.action}>
            
                        <TextInput
                            placeholder="Firstname * "
                            placeholderTextColor='#D26767'
                            autocorrect={false}
                            style={styles.textInput}
                            value={prenom}
                            onChangeText={text => setPrenom(text)}
                        />
                    </View>
                    <View style={styles.action}>
                    
                        <TextInput
                            placeholder="Age *"
                            placeholderTextColor='#D26767'
                            autocorrect={false}
                            keyboardType= 'number-pad'
                            style={styles.textInput}
                            value={age}
                            onChangeText={text => setAge(text)}
                        />
                    </View>
                    <View style={styles.action}>
                        
                        <TextInput
                            placeholder="Weight (kg) *"
                            placeholderTextColor='#D26767'
                            autocorrect={false}
                            keyboardType= 'number-pad'
                            style={styles.textInput}
                            value={poid}
                            onChangeText={text => setPoid(text)}
                        />
                    </View>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="Size (cm) *"
                            placeholderTextColor='#D26767'
                            autocorrect={false}
                            keyboardType= 'number-pad'
                            style={styles.textInput}
                            value={taille}
                            onChangeText={text => setTaille(text)}
                        />
                    </View>
                    <View style={{ margin:10 }}>
                        <SelectBox
                            label="Goal"
                            options={K_OPTIONS}
                            value={objectif}
                            onChange={ val => setObjectif(val)}
                            hideInputFilter={true}
                            inputPlaceholder="Choose your goal *"
                            arrowIconColor="black"
                        />
                    </View>
                    <TouchableOpacity style={styles.commandButton} onPress={editUser}>
                        <Text style={styles.panelButtonTitle}>Update</Text>
                    </TouchableOpacity>
                </Animated.View>
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
        marginTop: 10,
        marginBottom : 300
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
        color: '#D26767'
    },
    panelHandel:{
        width:40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 20,
        marginLeft : 175,
    }

});

