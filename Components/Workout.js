import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { COLORS } from "./Colors"



const Workout = ({ navigation }) => {
  const [WorkoutsName, setWorkoutName] = useState('');
  const [WorkoutSets, setWorkoutSets] = useState('');
  const [WorkoutReps, setWorkoutReps] = useState('');
  const [WorkoutWeight, setWorkoutWeight] = useState('');


  const onSubmit = async () => {
    try {

      AsyncStorage.setItem("WorkoutName", WorkoutsName);
      AsyncStorage.setItem("WorkoutSets", WorkoutSets);
      AsyncStorage.setItem("WorkoutReps", WorkoutReps);
      AsyncStorage.setItem("WorkoutWeight", WorkoutWeight);
      navigation.navigate("Body");

    } catch (error) {
      alert(error)
    }

  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.Container}>
        <TextInput style={styles.textInput} maxLength={28} placeholder="Workout" onChangeText={value => setWorkoutName(value)}></TextInput>
        <TextInput style={styles.textInput} keyboardType="number-pad" maxLength={2} placeholder="Reps" onChangeText={value => setWorkoutReps(value)}></TextInput>
        <TextInput style={styles.textInput} keyboardType="number-pad"
          maxLength={2}
          placeholder="Sets"
          onChangeText={value => setWorkoutSets(value)}></TextInput>
        <TextInput style={styles.textInput} keyboardType="number-pad" maxLength={3} placeholder="Weight" onChangeText={value => setWorkoutWeight(value)}></TextInput>
        <View style={styles.button}>
          <TouchableOpacity onPress={onSubmit}>
            <Text style={styles.buttonText}>Add to Workout</Text>
          </TouchableOpacity>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default Workout;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 20,
    flex: 1,
  },
  textInput: {
    width: "100%",
    backgroundColor: COLORS.tiles,
    height: 60,
    padding: 10,
    marginTop: 10,
  },
  button: {
    height: 30,
    width: "80%",
    backgroundColor: COLORS.button,
    marginTop: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "serif"
  },

});
