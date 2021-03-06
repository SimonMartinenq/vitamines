import { View , Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { auth , db} from '../firebase'
import { useState,useEffect } from 'react'
import { FocusedStatusBar } from '../components'
import { COLORS,assets } from '../constants'


export default function UserInfo() {

  const navigation = useNavigation();
  const [userInfo,setUser] = useState(null);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(()=>{
        navigation.replace("LoginScreen")
      })
      .catch(error => alert(error.message))
  }
  
  

  const getUser = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        db
          .collection('Users')
          .doc(uid)
          .get()
          .then((querySnapshot) => {
              const dic = querySnapshot.data()
              setUser(dic);
              //console.log("user infos",dic)
            });
      }
    });
  }
  
  useEffect(() => {
    getUser();
  }, []);



  return (
    <SafeAreaView style={{top:"5%",backgroundColor:'#F1F1F1', height:"100%", marginTop:-50}}>
      <FocusedStatusBar backgroundColor={COLORS.gray} />
      <ScrollView
        contentContainerStyle={{alignItems:'center'}}
        showsVerticalScrollIndicator={false}
        >
        <Image 
          style={styles.userImg} 
          source={require('../assets/icons/user.png')}
        />
        <Text style={styles.userName}>{userInfo?.prenom} {userInfo?.nom}</Text>
        <Text style={styles.userEmail}>

          {auth.currentUser?.email} 
        </Text>
        <Text style={styles.aboutUser}>
          Goal : {userInfo?.objectif}
        </Text>
        <Text style={styles.aboutUser}>
          Diet : {userInfo?.diet}
        </Text>
        <Text style={styles.aboutUser}>
          Intolerence : {userInfo?.intolerence}
        </Text>
        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoSubTitle}>Age</Text>
            <Text style={styles.userInfoTitle}>{userInfo?.age}</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoSubTitle}>Weight</Text>
            <Text style={styles.userInfoTitle}> {userInfo?.poid} kg</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoSubTitle}>Size</Text>
            <Text style={styles.userInfoTitle}>{userInfo?.taille} cm</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoSubTitle}>BMI</Text>
            <Text style={styles.userInfoTitle}>{Math.round((userInfo?.poid)/(userInfo?.taille/100)**2)}</Text>
          </View>
        </View>
        <View
        style={{
          alignItems: "center",
        }}
      >
    
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 60, height: 60 }}
        />
      </View>
       
        <View>
          <View style={styles.ligne}><Text source={styles.row} style={{marginHorizontal: 30, color:COLORS.primary, fontWeight:'bold'}}>BMI</Text><Text source={styles.row} style={{marginHorizontal: 30, color:COLORS.primary, fontWeight:'bold'}}>Interpretation</Text></View>
          <View style={styles.ligne}><Text source={styles.row} style={{marginHorizontal: 30}}>+ 40        </Text><Text source={styles.row} style={{marginHorizontal: 30}}>Morbid or massive obesity</Text></View>
          <View style={styles.ligne}><Text source={styles.row} style={{marginHorizontal: 30}}>35 - 40     </Text><Text source={styles.row} style={{marginHorizontal: 30}}>Severe obesity</Text></View>
          <View style={styles.ligne}><Text source={styles.row} style={{marginHorizontal: 30}}>30 - 35     </Text><Text source={styles.row} style={{marginHorizontal: 30}}>Moderate obesity</Text></View>
          <View style={styles.ligne}><Text source={styles.row} style={{marginHorizontal: 30}}>25 - 30     </Text><Text source={styles.row} style={{marginHorizontal: 30}}>Overweight</Text></View>
          <View style={styles.ligne}><Text source={styles.row} style={{marginHorizontal: 30}}>18.5 - 25   </Text><Text source={styles.row} style={{marginHorizontal: 30}}>Normal weight</Text></View>
          <View style={styles.ligne}><Text source={styles.row} style={{marginHorizontal: 30}}>16.5 - 18.5 </Text><Text source={styles.row} style={{marginHorizontal: 30}}>Thinness</Text></View>
          <View style={styles.ligne}><Text source={styles.row} style={{marginHorizontal: 30}}>- 16.5      </Text><Text source={styles.row} style={{marginHorizontal: 30}}>Famine</Text></View>
        </View>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity 
            style={styles.userBtn} 
            onPress={() => navigation.navigate('EditProfilScreen')}>
            <Text style={styles.userBtnTxt}>
              Update profil
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom:100}}></View>
      </ScrollView>
    </SafeAreaView>
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
      marginTop:10,
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
    borderRadius: 75
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#D26767'
  },
  userEmail: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  aboutUser: {
    fontSize: 16,
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
    borderColor: '#D26767',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    marginTop : 20
  },
  userBtnTxt: {
    color: '#D26767'
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 15,
    padding:10
  },
  userInfoItem: {
    justifyContent: 'center'
  },
  userInfoTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  ligne:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:10,
    
  },
  row:{
    borderWidth:1,
    borderColor:COLORS.primary,
    color:COLORS.primary,
  }
});