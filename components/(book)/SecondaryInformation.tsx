import React from 'react'
import { View, StyleSheet } from 'react-native'
import Formats from './Formats'
import { ResponseType } from "../../utils/types";


type Props = {
    bookInfo: ResponseType;
  };

const SecondaryInformation = ({bookInfo}: Props) => {
  return (
    <View style={styles.container}>
        <Formats formats={bookInfo?.docs[0].format} />
    

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginTop: 40,
    }
}) 

export default SecondaryInformation