import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, setState, React, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
  RefreshControl,
} from "react-native";

const Body = () => {
  const [WorkoutsName, setWorkoutName] = useState("");
  const [WorkoutSets, setWorkoutSets] = useState("");
  const [WorkoutReps, setWorkoutReps] = useState("");
  const [WorkoutWeight, setWorkoutWeight] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);



  const onSubmit = async () => {
    try {
      AsyncStorage.setItem("WorkoutName", WorkoutsName);
      AsyncStorage.setItem("WorkoutSets", WorkoutSets);
      AsyncStorage.setItem("WorkoutReps", WorkoutReps);
      AsyncStorage.setItem("WorkoutWeight", WorkoutWeight);
    } catch (error) {
      alert(error)
    }

  };

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
    <ScrollView style={styles.scroll} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
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

          <KeyboardAvoidingView
            keyboardVerticalOffset={-500}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
          >
            <View style={styles.bottomBar}>
              <View style={styles.modalWeight}>
                <TextInput maxLength={28} placeholder="Workout" onChangeText={value => setWorkoutName(value)}
                />
                <TextInput
                  keyboardType="number-pad"
                  maxLength={2}
                  placeholder="Sets"
                  onChangeText={value => setWorkoutSets(value)}

                ></TextInput>
                <TextInput keyboardType="number-pad" maxLength={2} placeholder="Reps" onChangeText={value => setWorkoutReps(value)}></TextInput>
                <TextInput keyboardType="number-pad" maxLength={3} placeholder="Weight" onChangeText={value => setWorkoutWeight(value)}></TextInput>
              </View>
              <View style={styles.button}>
                <TouchableOpacity onPress={onSubmit}>
                  <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "green"
  },
  bodyContainer: {
    backgroundColor: "#e2e2e2",
    height: Dimensions.get("window").height
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
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    margin: 4,
  },
  srwTitles: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 45,
  },
});

export default Body;
