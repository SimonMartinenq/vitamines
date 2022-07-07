import { StatusBar ,StyleSheet} from "react-native";
import { useFonts } from "expo-font";
import { DefaultTheme,NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./screens/Details";
import ForgotPassword from "./screens/ForgotPassword";
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";
import EditProfilScreen from "./screens/EditProfil";
import NavigationTab from "./CustomNavigation";
import UserInfo from "./screens/UserInfo";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:"transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  
  if (!loaded) return null;
  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        barStyle={'dark-content'}/>
        <Stack.Navigator
          screenOptions={{
              headerShown: false
          }}
          initialRouteName="LoginScreen"
        >
      

          <Stack.Screen
              name="NavigationTab"
              component={NavigationTab}
          />
          <Stack.Screen
              name="Details"
              component={Details}
          />
          <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
          />
          <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
          />
          <Stack.Screen
              name="SignUp"
              component={SignUp}
          />
          <Stack.Screen
              name="EditProfilScreen"
              component={EditProfilScreen}
          />
          <Stack.Screen
              name="UserInfo"
              component={UserInfo}
          />
        
  
        </Stack.Navigator>
    </NavigationContainer>
    
  );
};


const styles = StyleSheet.create({
  navigator:{
    position: 'absolute',
    bottom:20,
    left:20,
    right:20,
    elevation:0,
    borderRadius:15,
    height:80,
    paddingBottom:0,
  },
})

export default App;
