import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

type Props = {
  buttonText: string;
  action: () => void;
};

const ScanButton = ({ buttonText, action }: Props) => {
  return (
    <BlurView intensity={30}  style={styles.blurContainer}>
      <TouchableOpacity style={styles.button} onPress={() => action()}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 125,
    padding: 60,
    width: 100,
    height: 100,
    position: "relative",
    overflow: "hidden",
  }
});

export default ScanButton;
