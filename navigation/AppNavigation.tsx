import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import BookScreen from '../screens/BookScreen';
import ScanScreen from '../screens/ScanScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigation