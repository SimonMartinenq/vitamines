
import { View,Text , StyleSheet, Image} from "react-native";
import Colors from "../../assets/theme/Colors";
import Slide1 from "../../assets/images/slide1.png"
import Slide2 from "../../assets/images/slide2.png"
import Slide3 from "../../assets/images/slide3.png"
import AppIntroSlider from "react-native-intro-slider";

const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: Slide1,
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: Slide2,
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: Slide3,
      backgroundColor: '#22bcb5',
    }
  ];

function WelcomeScreen() {


    return(
        <View style={styles.container}>
            <Text>
                Bienvenue
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      slide: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        marginBottom:50
      },
      image: {
        height:'60%',
        width:'100%',
        resizeMode:'contain',
        marginTop: 30,
      },
      logo: {
        height:100,
        width:100
      },
    
      text: {
        color: Colors.gray,
        textAlign: 'center',
        
        fontWeight:'500',
        fontSize:14,
        margin:20,
        paddingLeft: 10,
        paddingRight: 10
    
      },
      title: {
        fontSize: 40,
        color: Colors.black,
        textAlign: 'center',
        fontWeight:'700',
       
        marginTop:20
      },
      dots: {
        backgroundColor: Colors.gray,
      },
      activeDots: {
        backgroundColor: Colors.colorPrimary,
        width:25
      },
      next: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.white,
      },
      done: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.white,
      },
      button:{
        backgroundColor:Colors.colorPrimary,
        width: 150,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:15,
        paddingBottom:15,
        borderRadius:40,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center'
      }
    
});

export default WelcomeScreen;