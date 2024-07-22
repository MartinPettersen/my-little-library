import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CoverImage from "./CoverImage";
import { BookMark, RootStackParamList } from "../../utils/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Props = {
  book: BookMark;
  parent: string;
};

const BookCard = ({ book, parent }: Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  return (
    <TouchableOpacity style={[styles.displayContainer, styles.shadow]} onPress={() => navigation.navigate("Book", {type: "String", data: book.isbn.toString()})}>
      <CoverImage book={book} />
      <Text style={styles.text}>
        {parent == "library"
          ? `Read: ${book.read ? "Yes" : "No"}`
          : `Owned: ${book.owned ? "Yes" : "No"}`}
      </Text>
    </TouchableOpacity>
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
  shadow: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BookCard;
