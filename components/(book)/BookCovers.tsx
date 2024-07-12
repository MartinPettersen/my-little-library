import React, { useState } from 'react'
import { View, Image, StyleSheet, FlatList, Text } from 'react-native'
import { ResponseType } from "../../utils/types";

type Props = {
  bookInfo: ResponseType;
}

type RenderProp = {
    item: string;

}

const BookCovers = ({bookInfo}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState<string | null>(null)


    const renderBookCoverItem = ({item}: RenderProp) => {
        setCurrentImage(item)
        return (<Image
          style={styles.image}
          source={{
            uri: `https://covers.openlibrary.org/b/isbn/${item}-M.jpg`,
          }}
          resizeMode="contain"
        />)    
    }

  return (
    <View style={styles.imageContainer}>
        <FlatList
        data={bookInfo.docs[0].isbn}
        renderItem={renderBookCoverItem}
        keyExtractor={(item: string) => item.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text>No book cover found</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,

    height: 300, 

    backgroundColor: "black",
  },
  imageContainer: {
    aspectRatio: 1,

    height: 300, 

  }
})

export default BookCovers