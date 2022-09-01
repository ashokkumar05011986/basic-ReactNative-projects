import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as axios from 'axios';

export default function App() {
  const [tutorials, setTutorials] = useState();

  const url = 'https://jsonplaceholder.typicode.com/users';
  //! GET (Read)
  const getTutorials = async () => {
    console.log('data ------------>>>>>>>>>>>>>>>>>>>>>');
    await axios
      .get(url)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  //? Sadece Component mount oldugunda istek yapar
  //   useEffect(() => {
  //     getTutorials();
  //     console.log(tutorials);
  //   }, []);

  const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    //! Fetch ile:
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <View>
      <Text>App</Text>
      {/* <Button title="button" onPress={fetchData} /> */}
      <Button title="button" onPress={getTutorials} />
    </View>
  );
}

const styles = StyleSheet.create({});
