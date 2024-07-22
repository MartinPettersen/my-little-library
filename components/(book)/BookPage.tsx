import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useGetBook } from "../../hooks/useGetBook";
import BookButton from "./BookButton";
import BookDisplay from "./BookDisplay";
import SecondaryInformation from "./SecondaryInformation";
import {
  addBook,
  getBook,
  updateBookOwnership,
  updateBookRead,
  updateBookWant,
} from "../../database/database";

type Props = {
  type: string;
  data: string;
};

const BookPage = ({ type, data }: Props) => {
  const bookInformation = useGetBook(data);

  const handleUpdateBook = async (subject: string) => {
    const book = await getBook(parseInt(data));
    console.log(book[0]);

    if (book.length < 1) {
      await addBook(parseInt(data));
      const book = await getBook(parseInt(data));
      console.log(book);
    }

    if (subject == "read") {
      updateBookRead(book[0].id, !book[0].read);
    }
    if (subject == "want") {
      updateBookWant(book[0].id, !book[0].want);
    }
    if (subject == "own") {
      updateBookOwnership(book[0].id, !book[0].owned);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Hei</Text>
      {!bookInformation ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <BookDisplay bookInfo={bookInformation} />
          <BookButton
            buttonText="Add To Read"
            action={() => handleUpdateBook("read")}
          />
          <BookButton
            buttonText="Want To Read"
            action={() => handleUpdateBook("want")}
          />
          <BookButton
            buttonText="Add To Owned"
            action={() => handleUpdateBook("own")}
          />
          <SecondaryInformation bookInfo={bookInformation} />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  text: {
    color: "#27272a",
  },
});

export default BookPage;
