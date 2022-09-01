import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.styles';

const Input = ({label, onChangeText, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input_container}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
