import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from './Colors';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ color: COLORS.button, fontSize: 40 }}>Gym Diary</Text>
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