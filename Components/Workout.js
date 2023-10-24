import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const WorkoutTile = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.workoutName}>{props.workoutText}</Text>
      <View style={styles.srwTitles}>
        <Text>{props.setsText}</Text>
        <Text>{props.text1}</Text>
        <Text>weight</Text>
      </View>
    </View>
  );
};

export default WorkoutTile;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    margin: 4,
    flexDirection: "row",
    width: '100%',
    alignitems: 'center'
  },
  workoutName: {
    flex: 0.5,
    fontSize: 20,
  },
  srwTitles: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
