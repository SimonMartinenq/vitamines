import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Details from "./screens/Details";
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";
import Favoris from "./screens/Favoris";
import UserInfo from "./screens/UserInfo";
import EditProfil from "./screens/EditProfil"
import { StatusBar } from "react-native";
import { COLORS } from "./constants";
import ForgotPassword from "./screens/ForgotPassword";
import About_us from "./screens/About_us";
import Meal_plan from "./screens/Meal_plan";

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
          headerShown: false,
        }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Favoris" component={Favoris} />
        <Stack.Screen name="EditProfil" component={EditProfil} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="About_us" component={About_us} />
        <Stack.Screen name="Meal_plan" component={Meal_plan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
