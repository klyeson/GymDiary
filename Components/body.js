import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import React, { useState } from "react";
import WorkoutTile from "./Workout";

const Body = (props) => {
  const [workoutText, setText] = useState();
  const [setsText, setText1] = useState();
  const [workoutTextItems, setWorkoutItems] = useState([]);


  const handleAddTask = () => {
    Keyboard.dismiss();
    setWorkoutItems([...workoutTextItems, workoutText, setsText])
    setText(null);
    setText1(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...workoutTextItems];
    itemsCopy.splice(index, 1);
    setWorkoutItems(itemsCopy)
  }
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.topItem}>
        <Text style={styles.workoutName}>Workout</Text>
        <View style={styles.srwTitles}>
          <Text style={styles.workoutSets}>Sets</Text>
          <Text style={styles.workoutReps}>Reps</Text>
          <Text style={styles.workoutWeight}>Weight</Text>
        </View>
      </View>
      <View style={styles.workoutTile}>
        {
          workoutTextItems.map((item, index, item1) => {
            return(
              <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
              <WorkoutTile text={item} setsText={item1}/> 
              </TouchableOpacity>
            )
          })
        }
      </View> 

      <KeyboardAvoidingView
        keyboardVerticalOffset={-500}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <View style={styles.bottomBar}>
          <View style={styles.modalWeight}>
            <TextInput maxLength={28} placeholder="Workout" value={workoutText} onChangeText={text => setText(text)}
            />
            <TextInput
            value={setsText}
            onChangeText={setsText => setText1(setsText)}
            keyboardType="number-pad"
            placeholder="Sets"
            ></TextInput>
            <TextInput keyboardType="number-pad" placeholder="Reps"></TextInput>
            <TextInput keyboardType="number-pad" placeholder="Weight"></TextInput>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: "#e2e2e2",
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
