import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
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
