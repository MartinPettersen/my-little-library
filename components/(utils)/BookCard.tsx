import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CoverImage from "./CoverImage";
import { BookMark } from "../../utils/types";

type Props = {
  book: BookMark;
  parent: string;
};

const BookCard = ({ book, parent }: Props) => {
  return (
    <View style={styles.displayContainer}>
      <CoverImage book={book} />
      <Text style={styles.text}>
        {parent == "library"
          ? `Read: ${book.read ? "Yes" : "No"}`
          : `Owned: ${book.owned ? "Yes" : "No"}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  displayContainer: {
    margin: 24,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffcc96",
    borderColor: "#27272a",
    borderWidth: 1,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#27272a",
    marginBottom: 20,
  },
});

export default BookCard;
