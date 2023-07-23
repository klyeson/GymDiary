import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import React from 'react'
import WorkoutTile from './Workout';

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <WorkoutTile />
      <WorkoutTile />
    </View>
  )
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: '#e2e2e2',
  },
});

export default Body