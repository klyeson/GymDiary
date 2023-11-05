import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useCallback, React } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { COLORS } from "./Colors";

const Body = ({ navigation }) => {
  const [workoutSlides, setWorkoutSlides] = useState([]);

  useEffect(() => {
    load();
  }, []);


  const load = async () => {
    try {
      const storedSlides = await AsyncStorage.getItem('workoutSlides');
      if (storedSlides) {
        const parsedSlides = JSON.parse(storedSlides);
        setWorkoutSlides(parsedSlides);
      }
      const name = await AsyncStorage.getItem('WorkoutName');
      const sets = await AsyncStorage.getItem('WorkoutSets');
      const reps = await AsyncStorage.getItem('WorkoutReps');
      const weight = await AsyncStorage.getItem('WorkoutWeight');
      if (name, reps, sets, weight) {
        setWorkoutSlides((prevSlides) => [
          ...prevSlides,
          {
            name: name,
            reps: reps,
            sets: sets,
            weight: weight,
          },
        ]);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('workoutSlides',
          JSON.stringify(workoutSlides));
      } catch (err) {
        console.log(err);
      }
    };
    storeData();
  }, [workoutSlides]);

  const renderItem = ({ item, index }) => (
    <View style={styles.workoutTile}>
      <TouchableOpacity onPress={null}>
        <View style={styles.topItem}>
          <Text style={styles.workoutName}>{item.name}
          </Text>
          <View style={styles.srwTitles}>
            <Text style={styles.workoutSets}>{item.reps}
            </Text>
            <Text style={styles.workoutReps}>{item.sets}
            </Text>
            <Text style={styles.workoutWeight}>{item.weight}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  // const deleteItem = React.useCallback((itemToDelete) => {
  //   setItems((currentItems) =>
  //     currentItems.filter((item) => item.reference !== itemToDelete.reference)
  //   );
  // }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.bodyContainer}>
        <View style={styles.topItem}>
          <Text style={styles.workoutName}>WorkoutName</Text>
          <View style={styles.srwTitles}>
            <Text style={styles.workoutSets}>Reps</Text>
            <Text style={styles.workoutReps}>Sets</Text>
            <Text style={styles.workoutWeight}>Weight</Text>
          </View>
        </View>
        <FlatList
          data={workoutSlides}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}

        />
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
    </TouchableWithoutFeedback >
  );
};

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
  },
  button: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  button2: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-start",
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
