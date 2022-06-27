import { View, Image, TextInput ,StyleSheet,KeyboardAvoidingView, TouchableOpacity, Text} from 'react-native'
import React, { useEffect , useState} from 'react'
import { auth , db} from '../firebase'
import { useNavigation } from '@react-navigation/native'
import SelectBox from 'react-native-multi-selectbox'
import logo from "../assets/images/logo.png";


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [poid, setPoid] = useState('')
    const [taille, setTaille] = useState('')
    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [objectif, setObjectif] = useState({})
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Home")
            }
        })
        return unsubscribe
    },[])

    const hanfleSignUp = () =>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            CreateUser()
            console.log("Register with",user.email);
        })
        .catch(error => alert(error.message))
    }

    const CreateUser = () => {
        // Add a new document in collection "cities"
        var userRef = db.collection("Users");
    
        userRef.doc(auth.currentUser.uid).set({
            uid:auth.currentUser.uid,
            nom:nom,
            prenom:prenom,
            email: email,
            age:age,
            poid:poid,
            taille:taille.toLowerCase(),
            objectif:objectif.item.toLowerCase(),
            favoris: [],
            })
        .then(() => {
          console.log("User successfully create!");
        })
        .catch((error) => {
          console.error("Error creating document: ", error);
        });
      }


    const K_OPTIONS = [
        {
          item: "Perdre du poids",
        },
        {
          item: "Mieux manger",
        },
        {
          item:  "Manger pas cher",
        },
      ]

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
        <View style={styles.imgcontainer}>
            <Image 
                style={styles.imagelogo}
                source={logo}
            />
            <Text style={styles.txttittle}>Créer un compte</Text>
        </View>
      <View  style={styles.inputcontainer}>
      <TextInput
            placeholder="Prénom"
            placeholderTextColor="grey"
            value={prenom}
            onChangeText={text => setPrenom(text)}
            style={styles.input}
        />
        <TextInput
            placeholder="Nom"
            placeholderTextColor="grey"
            value={nom}
            onChangeText={text => setNom(text)}
            style={styles.input}
        />
        <TextInput
        placeholder="Email"
        placeholderTextColor="grey"
        value={email}
        onChangeText={text =>setEmail(text.toLowerCase())}
        style={styles.input}
        />
        <TextInput
        placeholder="Mot de passe"
        placeholderTextColor="grey"
        value={password }
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
        <View style={styles.align}>
            <View style={styles.box}>
                <TextInput
                    placeholder="Age"
                    placeholderTextColor="grey"
                    keyboardType= 'number-pad'
                    value={age}
                    onChangeText={text => setAge(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.box}>
                <TextInput
                    placeholder="Poids"
                    placeholderTextColor="grey"
                    keyboardType= 'number-pad'
                    value={poid}
                    onChangeText={text => setPoid(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.box}>
                <TextInput
                    placeholder="Taille (cm)"
                    placeholderTextColor="grey"
                    keyboardType= 'number-pad'
                    value={taille}
                    onChangeText={text => setTaille(text)}
                    style={styles.input}
                />
             </View>
        </View>
            <View style={{ margin:10 }}>
                <SelectBox
                    label=""
                    options={K_OPTIONS}
                    value={objectif}
                    onChange={ val => setObjectif(val)}
                    hideInputFilter={true}
                    inputPlaceholder="Choisir son objectif"
                    arrowIconColor="black"
                />
            </View>
        
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={hanfleSignUp}
        style={styles.button }
        >
            <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    imgcontainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    imagelogo:{
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    txttittle:{
        fontWeight: 'bold',
        fontSize: 28,
        padding: 5,
    },
    align:{
        flexDirection: "row",
    },
    box:{
        width: '31%',
        height: 50,
        margin: '1%',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F1F1F1'
    },
    inputcontainer:{
        width:'80%',
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:'2%',
        
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'5%',
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
})

export default SignUp;





