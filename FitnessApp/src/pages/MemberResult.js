import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MemberResult = ({route}) => {
  console.log(route.params);
  const user = route.params;
  return (
    <View>
      <Text style={styles.title}>Üye Bilgileri </Text>
      <Text style={styles.label}>Üye Adı: {user.userName}</Text>
      <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
      <Text style={styles.label}>Üye Yaşı: {user.userAge}</Text>
      <Text style={styles.label}>Üye E-posta: {user.userEmail}</Text>
    </View>
  );
};

export default MemberResult;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    margin: 8,
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  label: {
    color: 'black',
    margin: 8,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
