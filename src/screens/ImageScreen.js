import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        imageSrc={require("../../assets/forest.jpg")}
        title="Forest"
        score={10}
      />
      <ImageDetail
        imageSrc={require("../../assets/beach.jpg")}
        title="Rain Forest"
        score={9}
      />
      <ImageDetail
        imageSrc={require("../../assets/mountain.jpg")}
        title="Asd"
        score={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
