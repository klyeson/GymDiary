import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WorkoutTile = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.workoutName}>workout</Text>
      <View style={styles.srwTitles}>
        <Text style={styles.workoutSets}>sets</Text>
        <Text style={styles.workoutReps}>reps</Text>
        <Text style={styles.workoutWeight}>weight</Text>
      </View>
    </View>
  );
};

export default WorkoutTile;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    margin: 4,
    flexDirection: "row",
  },
  workoutName: {
    flex: 0.5,
  },
  srwTitles: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  workoutSets: {},
  workoutReps: {},
  workoutWeight: {},
});
