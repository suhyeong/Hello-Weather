import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.redView}>
        <Text>Hello! this is red view</Text>
      </View>
      <View style={styles.yellowView}>
        <Text>Hello! this is yellow view</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  redView: {
    //flex: 1,
    width: 100,
    height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  yellowView: {
    //flex: 6,
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
