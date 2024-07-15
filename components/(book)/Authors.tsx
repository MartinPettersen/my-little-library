import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
    authors: string[];
}

const Authors = ({authors}: Props) => {
  return (
    <View style={styles.container}>
        <Text>Authors: </Text>
        {authors.map((author, index) => (
            <Text style={styles.text} key={index}>{author} {(index + 1) < authors.length? ", ": ""}</Text>
        ))}

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    text: {
        color: "#27272a",
    }
})

export default Authors