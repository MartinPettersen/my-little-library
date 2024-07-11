import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
    buttonText: string;
    action: () => void;
  };

const BookButton = ({buttonText, action}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, styles.shadow]} onPress={() => action()}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      width: 200,
      height: 50,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffcc96",
      borderColor: "#27272a",
      borderWidth: 1,
      marginVertical: 10,
    },
    buttonText: {
      color: "#27272a",
      fontWeight: "bold",
      fontSize: 23,
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
export default BookButton