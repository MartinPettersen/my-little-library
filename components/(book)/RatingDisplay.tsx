import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RatingBar from "./RatingBar";
import { ResponseType } from "../../utils/types";

type Props = {
  bookInfo: ResponseType;
};

const RatingDisplay = ({ bookInfo }: Props) => {

  return (
    <View>
    <Text>Rating: </Text>
    <View style={styles.container}>
      <RatingBar ratingNumber="5" barOne={bookInfo?.docs[0].ratings_count_5} total={bookInfo?.docs[0].ratings_count} />
      <RatingBar ratingNumber="4" barOne={bookInfo?.docs[0].ratings_count_4} total={bookInfo?.docs[0].ratings_count} />
      <RatingBar ratingNumber="3" barOne={bookInfo?.docs[0].ratings_count_3} total={bookInfo?.docs[0].ratings_count} />
      <RatingBar ratingNumber="2" barOne={bookInfo?.docs[0].ratings_count_2} total={bookInfo?.docs[0].ratings_count} />
      <RatingBar ratingNumber="1" barOne={bookInfo?.docs[0].ratings_count_1} total={bookInfo?.docs[0].ratings_count} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default RatingDisplay;
