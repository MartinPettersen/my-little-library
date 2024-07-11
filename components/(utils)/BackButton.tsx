import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../../utils/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={[styles.button, styles.shadow]}
      onPress={() => navigation.goBack()}
    >
      <Text style={styles.buttonText}>{"Tilbake"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebe9e1",
    borderColor: "#27272a",
    borderWidth: 1,
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
});

export default BackButton;
