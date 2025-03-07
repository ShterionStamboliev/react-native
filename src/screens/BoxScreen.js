import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOne}></View>
      <View style={styles.viewTwo}></View>
      <View style={styles.viewThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    marginVertical: 10,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOne: {
    borderWidth: 3,
    width: 100,
    height: 100,
    borderColor: `rgb(233, 104, 81)`,
    backgroundColor: "red",
  },
  viewTwo: {
    borderWidth: 2,
    width: 100,
    height: 100,
    borderColor: `rgb(200,200,200)`,
    backgroundColor: "lime",
    alignSelf: "flex-end",
  },
  viewThree: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: `rgb(49, 136, 223)`,
    backgroundColor: "aqua",
  },
});

export default BoxScreen;
