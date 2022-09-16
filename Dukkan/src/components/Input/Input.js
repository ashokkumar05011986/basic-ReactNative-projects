import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './Input.styles';

const Input = ({placeholder, value, onType, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
