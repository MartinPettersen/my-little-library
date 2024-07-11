import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
    buttonText: string;
    action: () => void;
  };

const BookButton = ({buttonText, action}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => action()}>
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
  });
export default BookButton