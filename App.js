import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
    const InitialStackScreen = () => (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ title: 'SplashScreen' }}
        />
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
  )
  return (
    <NavigationContainer>
      <InitialStackScreen>

      </InitialStackScreen>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
