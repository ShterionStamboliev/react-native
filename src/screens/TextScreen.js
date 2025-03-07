import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const TextScreen = () => {
  const [textValue, setTextValue] = useState("");

  return (
    <View>
      <Text style={styles.passwordText}>Enter Password:</Text>
      <TextInput
        value={textValue}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        onChangeText={(newVal) => setTextValue(newVal)}
      />
      {textValue.length < 5 ? (
        <Text style={styles.errorText}>
          Password must be at least 5 characters
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    margin: 15,
    padding: 10,
    fontSize: 15,
  },
  passwordText: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 10,
  },
  errorText: {
    marginLeft: 15,
    color: "red",
  },
});

export default TextScreen;
