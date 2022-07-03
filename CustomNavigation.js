import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet } from 'react-native'

import About_us from './screens/About_us'
import Details from './screens/Details'
import EditProfilScreen from './screens/EditProfil'
import Favoris from './screens/Favoris'
import ForgotPassword from './screens/ForgotPassword'
import Home from './screens/Home'
import LoginScreen from './screens/LoginScreen'
import Meal_plan from './screens/Meal_plan'
import SignUp from './screens/SignUp'
import UserInfo from './screens/UserInfo'
import {COLORS} from "./constants/index"
import { Ionicons } from "@expo/vector-icons";


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeNavigation = () => {
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen 
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Details"
                component={Details}
            />
        </Stack.Navigator>
    )
}
export {HomeNavigation}

const ProfileNavigation = () => {
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen 
                name="UserInfo"
                component={UserInfo}
            />
            <Stack.Screen
                name="EditProfilScreen"
                component={EditProfilScreen}
            />
            <Stack.Screen
                name="UserNotConnectedNavigation"
                component={UserNotConnectedNavigation}
            />


        </Stack.Navigator>
    )
}
export {ProfileNavigation}

const FavorisNavigation = () => {
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="Favoris"
        >
            <Stack.Screen 
                name="Favoris"
                component={Favoris}
            />
            <Stack.Screen
                name="Details"
                component={Details}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="About_us"
                component={About_us}
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
                name="Meal_plan"
                component={Meal_plan}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />
        </Stack.Navigator>
    )
}
export {FavorisNavigation}

const UserConnectedNavigation = () => {
   return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeNavigation') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'About_us') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        }else if (route.name === 'ProfileNavigation') {
          iconName = focused
            ? 'ios-person'
            : 'ios-person-outline';
        }else if (route.name === 'FavorisNavigation') {
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
    initialRouteName="UserInfo"
    >
      <Tab.Screen name="HomeNavigation" component={HomeNavigation} />
      <Tab.Screen name="ProfileNavigation" component={ProfileNavigation} />
      <Tab.Screen name="FavorisNavigation" component={FavorisNavigation} />
      <Tab.Screen name="Meal_plan" component={Meal_plan} />
      <Tab.Screen name="About_us" component={About_us} />
    </Tab.Navigator>
   )
}
export {UserConnectedNavigation}

const UserNotConnectedNavigation = () => {
    return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
    initialRouteName="LoginScreen"
    >
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
    
    </Stack.Navigator>
    )
}
export {UserNotConnectedNavigation}

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