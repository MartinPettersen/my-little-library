import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'

type Props = {
    subject: string
}

const SubjectCard = ({ subject}: Props) => {
  return (
    <View style={styles.card}>
        <Text>

        {subject}
        </Text>
        </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        margin: 4,
        padding: 2,
    }
})

export default SubjectCard