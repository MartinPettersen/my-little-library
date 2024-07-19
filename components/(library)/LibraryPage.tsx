import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

type RenderProp = {
  item: TempProps;
};

type TempProps = {
  id: number;
  isbn: string;
};

const LibraryPage = () => {
  const bookList: TempProps[] = [
    {
      id: 1,
      isbn: "9781843547051",
    },
    {
      id: 2,
      isbn: "9781299003743",
    },
    {
      id: 3,
      isbn: "0307424731",
    },
    {
      id: 4,
      isbn: "9781433200120",
    },
    {
      id: 5,
      isbn: "0375726268",
    },
    {
      id: 6,
      isbn: "9781838959708",
    },
    {
      id: 7,
      isbn: "9781470824419",
    },
    {
      id: 8,
      isbn: "9781838959708",
    },
  ];

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
        keyExtractor={(item: TempProps) => item.id.toString()}
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
  }
});

export default LibraryPage;
