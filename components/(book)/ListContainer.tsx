import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
    tagline: string;
    list: string[];
}

const ListContainer = ({list, tagline}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.tagline}>{tagline}: </Text>
        {list.map((item, index) => (
            <Text style={styles.text} key={index}>{item} {(index + 1) < list.length? ", ": ""}</Text>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    tagline: {
        color: "#27272a",
    },
    text: {
        color: "#686870",
    }
})

export default ListContainer