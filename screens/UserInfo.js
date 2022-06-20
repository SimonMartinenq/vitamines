import React from 'react'
import { View , Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import { CircleButton } from '../components'
import { assets } from '../constants'
//import firestore from '@react-antive-firebase/firestore'
import Button from '../components/Button'


export default function UserInfo() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(()=>{
        navigation.replace("LoginScreen")
      })
      .catch(error => alert(error.message))
  }

  const ProfilSreen = () => {
    const {user, logout} = userContext(AuthContext);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome {user.id}</Text>
        <Button buttonTitle="Logout" onPress={() => logout()}/>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{alignItems:'center'}}
        
        showsVerticalScrollIndicator={false}
        >
        <Image 
          style={styles.userImg} 
          source={require('../assets/users/vivi.jpg')}
        />
        <Text style={styles.userName}>Victoria Stasik</Text>
        <Text style={styles.aboutUser}>
          Bla bla bla j'aime les licornes
        </Text>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}> 
            <Text style={styles.userBtnTxt}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}> 
            <Text style={styles.userBtnTxt}>Follow</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    /*
    <View style={{
      width: "100%", 
      height: 373,
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>
      <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack("Home")}
      left={15}
      
    />
      <Text>
      {/* on mets ? au cas ou l'email est undefine */ /*}
      Email : {auth.currentUser?.email} 
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
    */
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#D9D9D9'
  },
  inputcontainer:{
      width:'80%',
  },
  input:{
      backgroundColor:'white',
      paddingHorizontal: 15,
      paddingVertical:10,
      borderRadius:10,
      marginTop:5,
      
  },
  buttonContainer:{
      width:'60%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:40,
  },
  button:{
     backgroundColor:'#D26767',
     width:'100%',
     padding:15,
     borderRadius:10,
     alignItems:'center'
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



  contentContainer:{
    justifyContent : 'center',
    alignItems : 'center'
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom:10  
  },
  userBtnWrapper:{
    flexDirection: 'row',
    justifyContent:'center',
    width: '100%',
    marginBottom: 10  
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5
  },
  userBtnTxt: {
    color: '#2e64e5'
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20
  },
  userInfoItem: {
    justifyContent: 'center'
  },
  userInfoTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  }
});
