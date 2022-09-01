import React from 'react';

import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';

function App() {
  const sayHello = name => {
    console.log('Hello balım ' + name);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box_1}></View>
      <View style={styles.box_2}></View>
      <View style={styles.box_3}></View>
      <View style={styles.box_4}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // padding: 20,
  },
  box_1: {
    // margin: 20,
    width: 75,
    height: 75,
    backgroundColor: 'pink',
    alignSelf: 'flex-start',
  },
  box_2: {
    width: 75,
    height: 75,
    backgroundColor: 'lightblue',
  },
  box_3: {
    width: 75,
    height: 75,
    backgroundColor: 'lightgreen',
  },
  box_4: {
    width: 75,
    height: 75,
    backgroundColor: 'lightgray',
  },
});

export default App;
