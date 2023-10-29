import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, React } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { COLORS } from "./Colors";

const Body = ({ navigation }) => {
  const [WorkoutsName, setWorkoutName] = useState();
  const [WorkoutSets, setWorkoutSets] = useState();
  const [WorkoutReps, setWorkoutReps] = useState();
  const [WorkoutWeight, setWorkoutWeight] = useState();

  const load = async () => {
    try {
      const name = await AsyncStorage.getItem("WorkoutName");
      const sets = await AsyncStorage.getItem("WorkoutSets");
      const reps = await AsyncStorage.getItem("WorkoutReps");
      const weight = await AsyncStorage.getItem("WorkoutWeight");
      setWorkoutName(name);
      setWorkoutSets(sets);
      setWorkoutReps(reps);
      setWorkoutWeight(weight);
    } catch (error) {
      alert(error)
    }
  };

  deleteWorkout = () => {
    AsyncStorage.removeItem("WorkoutName");
    AsyncStorage.removeItem("WorkoutSets");
    AsyncStorage.removeItem("WorkoutReps");
    AsyncStorage.removeItem("WorkoutWeight");
    setWorkoutName("");
    setWorkoutSets("");
    setWorkoutReps("");
    setWorkoutWeight("");
  };

  useEffect(() => {
    load();
  }, []);


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.bodyContainer}>
        <View style={styles.topItem}>
          <Text style={styles.workoutName}>WorkoutName</Text>
          <View style={styles.srwTitles}>
            <Text style={styles.workoutSets}>Sets</Text>
            <Text style={styles.workoutReps}>Reps</Text>
            <Text style={styles.workoutWeight}>Weight</Text>
          </View>
        </View>
        <View style={styles.workoutTile}>
          <TouchableOpacity onPress={deleteWorkout}>
            <View style={styles.topItem}>
              <Text style={styles.workoutName}>{WorkoutsName}</Text>
              <View style={styles.srwTitles}>
                <Text style={styles.workoutSets}>{WorkoutSets}</Text>
                <Text style={styles.workoutReps}>{WorkoutReps}</Text>
                <Text style={styles.workoutWeight}>{WorkoutWeight}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomBar}>
          <View style={styles.modalWeight}>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate("AddWorkout")}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  bodyContainer: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 5
  },
  topItem: {
    paddingHorizontal: 15,
    margin: 4,
    flexDirection: "row",

  },
  workoutName: {
    flex: 0.5,
    fontSize: 20,
  },
  workoutSets: {
    fontSize: 16,
  },
  workoutReps: {
    fontSize: 16,
  },
  workoutWeight: {
    fontSize: 16,
  },
  writeTaskWrapper: {
    flex: 1,
  },
  workoutTile: {
    backgroundColor: COLORS.tiles,
    padding: 15,
    borderRadius: 10,
    margin: 4,
  },
  srwTitles: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomBar: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    bottom: 20,
  },
  modalWeight: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.button,
  },
  addText: {
    fontSize: 45,
    color: "#fff",
  },
});

export default Body;
