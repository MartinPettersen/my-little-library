import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useGetBook } from "../../hooks/useGetBook";
import BookButton from "./BookButton";
import BookDisplay from "./BookDisplay";
import SecondaryInformation from "./SecondaryInformation";
import {
  addBook,
  deleteBook,
  getBook,
  updateBookOwnership,
  updateBookRead,
  updateBookWant,
} from "../../database/database";
import { BookMark } from "../../utils/types";

type Props = {
  type: string;
  data: string;
};

const BookPage = ({ type, data }: Props) => {
  const bookInformation = useGetBook(data);

  const [libraryBook,setLibraryBook] = useState<BookMark | null>(null)

  const handleUpdateBook = async (subject: string) => {
    const book = await getBook(parseInt(data));

    if (book.length < 1) {
      await addBook(parseInt(data));
      const book = await getBook(parseInt(data));
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

  useEffect(() => {
    const checkForBook = async() => {

      const book = await getBook(parseInt(data));
      
      if (book.length > 0) {
        console.log("here")
        setLibraryBook(book[0])
      }
    }

    checkForBook()

  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Hei</Text>
      {!bookInformation ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <BookDisplay bookInfo={bookInformation} />
          <BookButton
            buttonText={(libraryBook !=  null && libraryBook!.read  == true) ? "Have Read": "Add To Read"}
            action={() => handleUpdateBook("read")}
          />
          <BookButton
            buttonText={(libraryBook !=  null && libraryBook!.want  == true) ? "On wishlist": "Add to whishlist"}
            action={() => handleUpdateBook("want")}
          />
          <BookButton
            buttonText={(libraryBook !=  null && libraryBook!.owned  == true) ? "Owned" :"Add To Owned"}
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
