import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet } from 'react-native'

import About_us from './screens/About_us'
import Favoris from './screens/Favoris'
import Home from './screens/Home'
import Meal_plan from './screens/Meal_plan'
import UserInfo from './screens/UserInfo'
import {COLORS} from "./constants/index"
import { Ionicons } from "@expo/vector-icons";


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


const NavigationTab = () => {
   return (
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
    
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="UserInfo" component={UserInfo} />
      <Tab.Screen name="Favoris" component={Favoris} />
      <Tab.Screen name="Meal_plan" component={Meal_plan} />
      <Tab.Screen name="About_us" component={About_us} />
    </Tab.Navigator>
   )
}
export default NavigationTab;

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