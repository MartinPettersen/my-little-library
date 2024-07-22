import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { getWishlistedBooks } from "../../database/database";
import { BookMark } from "../../utils/types";
import { useFocusEffect } from "@react-navigation/native";
import CoverImage from "../(utils)/CoverImage";
import BookCard from "../(utils)/BookCard";

type RenderProp = {
  item: BookMark;
};

const WishListPage = () => {
  const [bookList, setBookList] = useState<BookMark[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchBooks = async () => {
        const books = await getWishlistedBooks();
        setBookList(books);
        console.log(books);
      };

      fetchBooks();
    }, [])
  );

  const renderBookCoverItem = ({ item }: RenderProp) => {
    return (
      <BookCard book={item} parent="wishlist"/>

    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Wishlist</Text>
      <FlatList
        contentContainerStyle={styles.flatListContent}
        data={bookList}
        renderItem={renderBookCoverItem}
        keyExtractor={(item: BookMark) => item.id.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.emptyText}>Wishlist is empty</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    color: "#27272a",
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
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

export default WishListPage;
