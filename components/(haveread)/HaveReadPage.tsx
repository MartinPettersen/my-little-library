import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { getAllBooks } from "../../database/database";
import { BookMark } from "../../utils/types";
import { useFocusEffect } from "@react-navigation/native";

type RenderProp = {
  item: BookMark;
};

const HaveReadPage = () => {
  const [bookList, setBookList] = useState<BookMark[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchBooks = async () => {
        const books = await getAllBooks();
        setBookList(books);
        console.log(books);
      };

      fetchBooks();
    }, [])
  );

  const renderBookCoverItem = ({ item }: RenderProp) => {
    return (
      <View style={styles.displayContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://covers.openlibrary.org/b/isbn/${item.isbn}-M.jpg`,
          }}
        />
        <Text>{item.isbn}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Books I have Read</Text>
      <FlatList
        data={bookList}
        renderItem={renderBookCoverItem}
        keyExtractor={(item: BookMark) => item.id.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text>No book cover found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    color: "#27272a",
  },
  image: {
    aspectRatio: 1,

    height: 200,

    backgroundColor: "black",
  },
  displayContainer: {
    margin: 24,
  },
});

export default HaveReadPage;
