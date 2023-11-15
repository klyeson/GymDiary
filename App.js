import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import WorkoutTile from "./Components/Workout";
import Body from "./Components/body";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Body"
          component={Body}
          options={{
            title: "Gym Diary",
            headerStyle: {
              backgroundColor: "#00bfff",
            },
            headerTitleStyle: { fontSize: 28, fontFamily: "serif" },
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="AddWorkout"
          component={WorkoutTile}
          options={{
            title: "Gym Diary",
            headerStyle: {
              backgroundColor: "#00bfff",
            },
            headerTitleStyle: { fontSize: 28, fontFamily: "serif" },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
