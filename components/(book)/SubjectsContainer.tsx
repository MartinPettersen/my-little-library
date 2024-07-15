import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SubjectCard from "./SubjectCard";

type Props = {
  subjects: string[];
};

const SubjectsContainer = ({subjects}: Props) => {
  return (
    <View>
      <View style={styles.container}>
        {subjects.map((subject, index) => (
            <SubjectCard subject={subject} key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default SubjectsContainer;
