import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ComponentName = () => {
  const cats = [
    { name: "Garfield", age: 1 },
    { name: "Garfield 1", age: 2 },
    { name: "Garfield 2", age: 3 },
    { name: "Garfield 3", age: 4 },
    { name: "Garfield 4", age: 5 },
    { name: "Garfield 5", age: 6 },
    { name: "Garfield 6", age: 7 },
  ];

  return (
    <FlatList
      keyExtractor={(cats) => cats.name}
      data={cats}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 25,
    alignContent: "center",
  },
});

export default ComponentName;
