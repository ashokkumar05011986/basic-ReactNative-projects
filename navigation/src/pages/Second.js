import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Second = ({navigation, route}) => {
  console.log(navigation, route);
  const user = route.params.username;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Second</Text>
      <Text>{user}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});
