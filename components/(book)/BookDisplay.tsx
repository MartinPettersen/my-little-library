import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ResponseType } from "../../utils/types";
import BookCovers from "./BookCovers";
import ListContainer from "./ListContainer";

type Props = {
  bookInfo: ResponseType;
};

const BookDisplay = ({ bookInfo }: Props) => {


  return (
    <View style={styles.container}>
        {bookInfo !== null? 
       <BookCovers bookInfo={bookInfo}/>
        : null}
      <Text style={styles.title}>{bookInfo?.docs[0].title}</Text>
      <Text style={styles.subtitle}>{bookInfo?.docs[0].subtitle}</Text>
      <Text style={styles.text}>Pages: {bookInfo.docs[0].number_of_pages_median}   Published: {bookInfo.docs[0].first_publish_year}   Rating: {bookInfo.docs[0].ratings_average}/5</Text>
      <ListContainer tagline='Authors' list={bookInfo?.docs[0].author_name} />

      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    width: "90%",
    alignItems: "center"
  },
  title: {
    color: "#27272a",
    fontWeight: "bold",
    fontSize: 30,
  },
  subtitle: {
    color: "#27272a",
    fontWeight: "semibold",
    fontSize: 20,
  },

  text: {
    color: "#27272a",
  },
});

export default BookDisplay;
