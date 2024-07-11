import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  type: string;
  data: string;
};

const BookPage = ({ type, data }: Props) => {
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
