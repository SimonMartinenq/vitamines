import { View, Text , StyleSheet} from "react-native";
import Colors from "../../assets/theme/Colors";
import AppStatusBar from "../../components/AppStatusBar";


function SplashScreen() {
    return(
        <View style={styles.container}>
            <AppStatusBar/>
            <Text>
                SplashScreen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
      }
});
export default SplashScreen;