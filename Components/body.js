import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import React from 'react'

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <Text>Hello</Text>
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