import React from "react";
import { View } from "react-native";
import BookPage from "../components/(book)/BookPage";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../utils/types";

type BookRouteProp = RouteProp<RootStackParamList, "Book">;

const BookScreen = () => {
  const route = useRoute<BookRouteProp>();
  const { type, data } = route.params;
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <BookPage type={type} data={data} />
    </View>
  );
};

export default BookScreen;
