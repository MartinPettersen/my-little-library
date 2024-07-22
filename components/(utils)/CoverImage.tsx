import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  NativeSyntheticEvent,
  ImageLoadEventData,
} from "react-native";
import { BookMark } from "../../utils/types";

type Props = {
  book: BookMark;
};

const CoverImage = ({ book }: Props) => {
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const onLoad = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { width, height } = event.nativeEvent.source;
    setImageDimensions({ width, height });
  };

  const aspectRatio = imageDimensions
    ? imageDimensions.width / imageDimensions.height
    : 1;

  return (
    <View style={styles.displayContainer}>
      <Image
        style={[styles.image, { aspectRatio }]}
        source={{
          uri: `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`,
        }}
        onLoad={onLoad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    height: 200,
    backgroundColor: "black",
    borderColor: "#27272a",
    borderWidth: 1,
  },
  displayContainer: {
    margin: 24,
  },
});

export default CoverImage;
