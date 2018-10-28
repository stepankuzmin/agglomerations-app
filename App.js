/**
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Agglomerations.org</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
    </View>
  );
};

const containerBackgroundColor = "#F5FCFF";
const instructionsColor = "#333333";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: containerBackgroundColor
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: instructionsColor,
    marginBottom: 5
  }
});

export default App;
