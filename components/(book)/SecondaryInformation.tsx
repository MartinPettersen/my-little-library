import React from "react";
import { View, StyleSheet } from "react-native";
import { ResponseType } from "../../utils/types";
import ListContainer from "./ListContainer";
import RatingDisplay from "./RatingDisplay";

type Props = {
  bookInfo: ResponseType;
};

const SecondaryInformation = ({ bookInfo }: Props) => {
  return (
    <View style={styles.container}>
      <ListContainer tagline="Formats" list={bookInfo?.docs[0].format} />
      <ListContainer tagline="Languages" list={bookInfo?.docs[0].language} />
      <RatingDisplay bookInfo={bookInfo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    marginTop: 40,
  },
});

export default SecondaryInformation;
