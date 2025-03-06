import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCounter = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecreaseCounter = () => {
    if (count >= 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <View>
      <Text>Current count is:{count}</Text>
      <Button title="Press to increase" onPress={handleIncreaseCounter} />
      <Button title="Press to decrease" onPress={handleDecreaseCounter} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
