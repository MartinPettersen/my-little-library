import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BookScreen from "../screens/BookScreen";
import ScanScreen from "../screens/ScanScreen";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import LibraryScreen from "../screens/LibraryScreen";
import WishListScreen from "../screens/WishListScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Book" component={BookScreen} />
    <Stack.Screen name="Scan" component={ScanScreen} />
    <Stack.Screen name="Library" component={LibraryScreen} />
    <Stack.Screen name="WishList" component={WishListScreen} />

  </Stack.Navigator>
);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BlurView intensity={50} style={StyleSheet.absoluteFill}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "#27272a",
            tabBarStyle: {
              backgroundColor: "#ffcc96",
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              justifyContent: "center",
              alignItems: "center",
            },
            headerShown: false,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              color: "black",
            },
          }}
        >
          <Tab.Screen
            name={"home"}
            component={StackScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name={"home"}
                  size={25}
                  color={focused ? "white" : "#27272a"}
                />
              ),
            }}
          />
          <Tab.Screen
            name={"scan"}
            component={ScanScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name={"aperture"}
                  size={25}
                  color={focused ? "white" : "#27272a"}
                />
              ),
            }}
          />
          <Tab.Screen
            name={"library"}
            component={LibraryScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name={focused ? "book-open" : "book"}
                  size={25}
                  color={focused ? "white" : "#27272a"}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </BlurView>
    </NavigationContainer>
  );
};

export default AppNavigation;
