import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
    formats: string[];
}

const Formats = ({formats}: Props) => {
  return (
    <View style={styles.container}>
        <Text>Formats: </Text>
        {formats.map((format, index) => (
            <Text style={styles.text} key={index}>{format} {(index + 1) < formats.length? ", ": ""}</Text>
        ))}

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    text: {
        color: "#27272a",
    }
})

export default Formats