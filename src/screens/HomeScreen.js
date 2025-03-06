import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Heeelloooo</Text>
      <Button
        onPress={() => navigation.navigate("Component")}
        title="Go to the Component Page"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to the List Page"
      />
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Go to the Images Page"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
