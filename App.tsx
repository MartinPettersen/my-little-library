import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ScanScreen from "./screens/ScanScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BookScreen from "./screens/BookScreen";
import React from "react";
import AppNavigation from "./navigation/AppNavigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <AppNavigation />
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
