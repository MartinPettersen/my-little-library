import React from "react";
import { View, StyleSheet, Text } from "react-native";

type Props = {
  ratingNumber: string;
  barOne: number;
  total: number;
};

const RatingBar = ({ barOne, total, ratingNumber }: Props) => {

    const proportion = 100 / total;


  return (
    <View style={styles.container}>
    <View style={styles.barContainer}>
      <View style={[styles.barOne, { width: `${barOne * proportion}%` }]}>
        <Text></Text>
      </View>
      <View style={[styles.barTwo, { width: `${(total - barOne) * proportion}%` }]}>
        <Text></Text>
      </View>
    </View>
    <Text> {ratingNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginTop: 4
  },
  barContainer: {
    flexDirection: "row",
    width: "100%",
  },
  barOne: {
    backgroundColor: "#ffcc96",
  },
  barTwo: {
    backgroundColor: "#bbbbc9",
    borderEndEndRadius: 15,
    borderTopEndRadius: 15,
  },
});

export default RatingBar;
