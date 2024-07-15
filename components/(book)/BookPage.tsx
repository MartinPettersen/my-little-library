import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useGetBook } from "../../hooks/useGetBook";
import BookButton from "./BookButton";
import BackButton from "../(utils)/BackButton";
import BookDisplay from "./BookDisplay";
import SecondaryInformation from "./SecondaryInformation";

type Props = {
  type: string;
  data: string;
};

const BookPage = ({ type, data }: Props) => {
  const bookInformation = useGetBook(data);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!bookInformation ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <BookDisplay bookInfo={bookInformation} />
          <BookButton
            buttonText="Add To Read"
            action={() => console.log("added to read")}
          />
          <BookButton
            buttonText="Add To Owned"
            action={() => console.log("added to owned")}
          />
          <BackButton />
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
