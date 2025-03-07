import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const dispatchHandler = (type) => {
    type === "increment" ? dispatch({ type: "increment", payload: 1 }) : null;
    type === "decrement"
      ? state.count >= 1
        ? dispatch({ type: "decrement", payload: 1 })
        : null
      : null;
  };

  return (
    <View>
      <Button
        title="Press to increase"
        onPress={() => dispatchHandler("increment")}
      />
      <Button
        title="Press to decrease"
        onPress={() => dispatchHandler("decrement")}
      />
      <Text>Current count is:{state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
