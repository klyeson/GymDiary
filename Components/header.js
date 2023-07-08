import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ color: '#1ecbe1' , fontSize: 40}}>Gym Diary</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'black',
    alignItems: 'center',
    alignContent: 'center'
  },
});

export default Header