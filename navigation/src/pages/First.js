import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const First = ({navigation, route}) => {
  console.log(navigation);
  console.log(route);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from First</Text>
      <Button
        title="Go To Second"
        onPress={() => navigation.navigate('SecondScreen', {username: 'Sule'})}
      />
    </View>
  );
};

export default First;

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
    marginBottom: 20,
  },
});
