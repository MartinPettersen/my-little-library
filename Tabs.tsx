import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BookScreen from "./screens/BookScreen";
import ScanScreen from "./screens/ScanScreen";

const Stack = createStackNavigator();

const Tabs = () => {
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Scan"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default Tabs;
