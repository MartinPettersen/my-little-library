import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import BookScreen from '../screens/BookScreen';
import ScanScreen from '../screens/ScanScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Scan"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigation