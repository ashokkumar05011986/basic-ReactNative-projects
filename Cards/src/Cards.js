import React from 'react';

import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';

import styles from './Card.style/styles';

const Cards = () => {
  return (
    <View style={styles.card_container}>
      <View style={styles.card_body}>
        <Text style={styles.card_title}>Eddard Stark</Text>
        <Text style={styles.card_text}>Winter is coming...</Text>
      </View>
      <TouchableOpacity style={styles.card_button_container}>
        <Text style={styles.button_text}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cards;
