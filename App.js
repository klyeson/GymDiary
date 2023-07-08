import { SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';
import Header from './Components/header';
import Body from './Components/body';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
