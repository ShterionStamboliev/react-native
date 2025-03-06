import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "John";

  return (
    <View>
      <Text style={styles.textStyle}>Gettings started with React Native!</Text>
      <Text style={styles.secondText}>My name is {name}</Text>
      {/** object cannot be rendered inside text components e.g: {color: red} or {name: 'John'} */}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  secondText: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
