import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { getAllBooks } from "../../database/database";

type RenderProp = {
  item: BookMarkType;
};

type TempProps = {
  id: number;
  isbn: string;
};

type BookMarkType = {
  id: number;
  isbn: number;
  owned: number;
  read: number;
  want: number;
};

const LibraryPage = () => {

  const [bookList, setBookList] = useState([])

  useEffect(() => {

    const fetchBooks = async() => {

      
      const test = await getAllBooks();
      setBookList(test)
      console.log(test);
    }

    fetchBooks()
  
  },[])



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
      <Text style={styles.text}>My Little Library</Text>
      <FlatList
        data={bookList}
        renderItem={renderBookCoverItem}
        keyExtractor={(item: BookMarkType) => item.id.toString()}
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

export default LibraryPage;
