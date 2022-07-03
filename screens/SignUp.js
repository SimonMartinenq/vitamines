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
                navigation.replace("UserConnectedNavigation")
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
            item: "Lose weight",
        },
        {
            item: "Eat better",
        },
        {
            item:  "Eat cheap",
        },
    ]
    const Diet = [
        {item: "Gluten Free"},
        {item: "Ketogenic"},
        {item: "Vegetarian"},
        {item: "Lacto-Vegetarian"},
        {item: "Ovo-Vegetarian"},
        {item: "Vegan"},
        {item: "Pescetarian"},
        {item: "Paleo"},
        {item: "Primal"},
        {item: "Low FODMAP"},
        {item: "Whole30"},
    ]
    const Intolerances = [
        {item: "Dairy"},
        {item: "Egg"},
        {item: "Gluten"},
        {item: "Grain"},
        {item: "Peanut"},
        {item: "Seafood"},
        {item: "Sesame"},
        {item: "Shellfish"},
        {item: "Soy"},
        {item: "Sulfite"},
        {item: "Tree Nut"},
        {item: "Wheat"},
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
            <Text style={styles.txttittle}>Create an account</Text>
        </View>
        <View  style={styles.inputcontainer}>
            <TextInput
                    placeholder="Firstname"
                    placeholderTextColor="grey"
                    value={prenom}
                    onChangeText={text => setPrenom(text)}
                    style={styles.input}
            />
            <TextInput
                placeholder="Name"
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
                placeholder="Password"
                placeholderTextColor="grey"
                value={password}
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
                        placeholder="Weight"
                        placeholderTextColor="grey"
                        keyboardType= 'number-pad'
                        value={poid}
                        onChangeText={text => setPoid(text)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.box}>
                    <TextInput
                        placeholder="Size (cm)"
                        placeholderTextColor="grey"
                        keyboardType= 'number-pad'
                        value={taille}
                        onChangeText={text => setTaille(text)}
                        style={styles.input}
                    />
                </View>
            </View>
            <View>
                <View style={styles.selectcontaineralign}>
                    <View style={styles.boxselect}>
                        <SelectBox
                            label=""
                            options={Diet}
                            value={objectif}
                            onChange={ val => setObjectif(val)}
                            hideInputFilter={true}
                            inputPlaceholder="Give your Diet"
                            arrowIconColor="black"
                        />
                    </View>
                    <View style={styles.boxselect}>
                        <SelectBox
                            label=""
                            options={Intolerances}
                            value={objectif}
                            onChange={ val => setObjectif(val)}
                            hideInputFilter={true}
                            inputPlaceholder="Give your Intolerances"
                            arrowIconColor="black"
                        />
                    </View>
                </View>
                <SelectBox
                        label=""
                        options={K_OPTIONS}
                        value={objectif}
                        onChange={ val => setObjectif(val)}
                        hideInputFilter={true}
                        inputPlaceholder="Choose your objective"
                        arrowIconColor="black"
                    />
            </View>
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={hanfleSignUp}
        style={styles.button }
        >
            <Text style={styles.buttonText}>Register</Text>
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
    selectcontaineralign: {
        flexDirection: 'row',
        borderWidth: 0.8,
        borderRadius:10,
    },
    boxselect:{
        width: '45%',
        paddingHorizontal: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})

export default SignUp;





