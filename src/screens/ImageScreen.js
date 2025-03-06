import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="Rain Forest" />
      <ImageDetail title="Asd" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
