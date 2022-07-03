import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

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

const Stack = createStackNavigator()

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
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />
            <Stack.Screen
                name="Home"
                component={Home}
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