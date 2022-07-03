import { View , Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { auth , db} from '../firebase'
import { useState , useEffect} from 'react'
import TagInput from '../components/TagInput';



export default function UserInfo() {

  const navigation = useNavigation();
  const [user,setUser] = useState(null);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(()=>{
        navigation.replace("LoginScreen")
      })
      .catch(error => alert(error.message))
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
    <SafeAreaView style={{top:"5%"}}>
    
      <ScrollView
        contentContainerStyle={{alignItems:'center'}}
        showsVerticalScrollIndicator={false}
        >
        <Image 
          style={styles.userImg} 
          source={require('../assets/users/vivi.jpg')}
        />
        <Text style={styles.userName}>{user?.prenom} {user?.nom}</Text>
        <Text style={styles.userEmail}>
          {/* on mets ? au cas ou l'email est undefine */}
          {auth.currentUser?.email} 
        </Text>
        <Text style={styles.aboutUser}>
          Goal : {user?.objectif}
        </Text>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity 
            style={styles.userBtn} 
            onPress={() => navigation.navigate('EditProfilScreen')}>
            <Text style={styles.userBtnTxt}>
              Modify the profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoSubTitle}>Age</Text>
            <Text style={styles.userInfoTitle}>{user?.age}</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoSubTitle}>Weight</Text>
            <Text style={styles.userInfoTitle}> {user?.poid} kg</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoSubTitle}>Size</Text>
            <Text style={styles.userInfoTitle}>{user?.taille} cm</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View>
          
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
    borderRadius: 75
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
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
    marginHorizontal: 5
  },
  userBtnTxt: {
    color: '#D26767'
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