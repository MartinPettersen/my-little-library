import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useGetBook } from "../../hooks/useGetBook";

type Props = {
  type: string;
  data: string;
};

const BookPage = ({ type, data }: Props) => {

    const bookInformation = useGetBook(data)
    console.log(bookInformation)

  return (
    <View style={styles.container}>
      <Text>{type} {data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BookPage;
