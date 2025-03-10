import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreens = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${blue}, ${green})`;
};

const styles = StyleSheet.create({});

export default ColorScreens;
