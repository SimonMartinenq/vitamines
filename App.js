
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import Favoris from "./screens/Favoris";
import UserInfo from "./screens/UserInfo";
import { StatusBar} from "react-native";
import { assets, COLORS } from "./constants";
import About_us from "./screens/About_us";
import Meal_plan from "./screens/Meal_plan";
import { useFonts } from "expo-font";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:"transparent",
  },
};

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
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
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'About_us') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          }else if (route.name === 'UserInfo') {
            iconName = focused
              ? 'ios-person'
              : 'ios-person-outline';
          }else if (route.name === 'Favoris') {
            iconName = focused
              ? 'ios-heart'
              : 'ios-heart-outline';
          }else if (route.name === 'Meal_plan') {
            iconName = focused
              ? 'ios-calendar'
              : 'ios-calendar-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle:styles.navigator
      })}
      initialRouteName="LoginScreen"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="UserInfo" component={UserInfo} />
        <Tab.Screen name="Favoris" component={Favoris} />
        <Tab.Screen name="Meal_plan" component={Meal_plan} />
        <Tab.Screen name="About_us" component={About_us} />
      </Tab.Navigator>
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
