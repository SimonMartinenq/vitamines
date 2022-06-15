import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View , StyleSheet,Image} from "react-native";
import Colors from "../../assets/theme/Colors";
import AppStatusBar from "../../components/AppStatusBar";
import Logo from '../../assets/images/logo.png'

function SplashScreen() {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(() => {
            navigation.replace("Home")
        }, 3000);
    })

    return(
        <View style={styles.container}>
            <AppStatusBar/>
            <Image source={Logo} style={styles.logo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
      },
      logo:{
        height:200,
        width:200,
        resizeMode:'contain'
      }
    
});
export default SplashScreen;