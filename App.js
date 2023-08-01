import { SafeAreaView, StyleSheet, StatusBar, Text, View } from "react-native";
import Header from "./Components/header";
import Body from "./Components/body";
import React, { useState } from "react";

export default function App() {
  const [
    workout,
    setWorkout,
    sets,
    setSets,
    reps,
    setReps,
    weight,
    setWeights,
  ] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
