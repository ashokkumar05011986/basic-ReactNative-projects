import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../components/Button/Button';

const Wellcome = ({navigation}) => {
  function gotoMemberSign() {
    navigation.navigate('MemberSignScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kebap Fitness Salonu</Text>
      <Button text="Üye Kaydı Oluşturunuz" onPress={gotoMemberSign} />
    </View>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#000',
    backgroundColor: 'white',
  },
});
