import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScanScreen from './screens/ScanScreen';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './Tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from './screens/BookScreen';

const Stack = createStackNavigator();


export default function App() {
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
