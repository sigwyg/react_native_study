import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting.tsx'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Greeting name="John" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
