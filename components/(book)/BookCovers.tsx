import React, { useState } from 'react'
import { View, Image, StyleSheet, FlatList, Text } from 'react-native'
import { ResponseType } from "../../utils/types";

type Props = {
  bookInfo: ResponseType;
}

type RenderProp = {
    item: string;
}

const imageSize = 300; 

const BookCovers = ({bookInfo}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState<string | null>(null)


    const renderBookCoverItem = ({item}: RenderProp) => {
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
        onScroll={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / imageSize);
          if (index !== currentIndex) {
            setCurrentIndex(index);
            setCurrentImage(bookInfo.docs[0].isbn[index])

          }
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,

    height: imageSize, 

    backgroundColor: "black",
  },
  imageContainer: {
    aspectRatio: 1,

    height: imageSize, 

  }
})

export default BookCovers