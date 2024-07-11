import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useGetBook } from "../../hooks/useGetBook";
import BookButton from "./BookButton";
import BackButton from "../(utils)/BackButton";

type Props = {
  type: string;
  data: string;
};

const BookPage = ({ type, data }: Props) => {

    const bookInformation = useGetBook(data)
    console.log(bookInformation)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{type} {data}</Text>
      {!bookInformation ? 
          <Text>Loading...</Text>          
          :<>
          <Text style={styles.text}>{bookInformation?.docs[0].author_name}</Text>
          
          <BookButton buttonText="Add To Read" action={() => console.log("added to read")}/>
          <BookButton buttonText="Add To Owned" action={() => console.log("added to owned")}/>

            <BackButton />
          </>
    }


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    color: "#27272a"
  }
});

export default BookPage;
