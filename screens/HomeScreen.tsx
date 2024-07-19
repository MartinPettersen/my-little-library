import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../utils/types";
import { addBook, createTables } from "../database/database";

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  createTables()
  addBook(2346345,true,false,false)
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
        onPress={() => navigation.navigate("Scan")}
      >
        <Text style={styles.buttonText}>Scan Book</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
        onPress={() => navigation.navigate("Library")}
      >
        <Text style={styles.buttonText}>My Library</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
        onPress={() => navigation.navigate("HaveRead")}
      >
        <Text style={styles.buttonText}>Books i have Read</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
        onPress={() => navigation.navigate("WishList")}
      >
        <Text style={styles.buttonText}>Want to Read</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffcc96",
    borderColor: "#27272a",
    borderWidth: 1,
    margin: 20,
  },
  buttonText: {
    color: "#27272a",
    fontWeight: "bold",
    fontSize: 20,
  },
  shadow: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;
