import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Cards from './Cards';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddard Stark</Text>
          <Text style={styles.card_text}>Winter is coming...</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.button_text}>I LIKED</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Arif Işık</Text>
          <Text style={styles.card_text}>
            Uzaylılar tarafından kaçırıldım evet tarafından.
          </Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.button_text}>I LIKED</Text>
        </TouchableOpacity>
      </View>
      <Cards />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  card_container: {
    backgroundColor: 'white',
    margin: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  card_body: {
    padding: 10,
    // margin: 20,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    marginBottom: 3,
  },

  card_text: {
    fontSize: 18,
    color: 'black',
    margin: 10,
    marginTop: 3,
  },
  card_button_container: {
    backgroundColor: '#00A3DD',
    padding: 10,
    alignItems: 'center',
  },

  button_text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
