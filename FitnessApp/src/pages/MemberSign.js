import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userEmail) {
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler Boş Bırakılamaz');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userEmail,
    };
    console.log(user);
    navigation.navigate('MemberResultScreen', {
      userName,
      userSurname,
      userAge,
      userEmail,
    });
  }
  return (
    <View>
      <Input
        label="Üye Adı"
        placeholder="Üye İsmini Giriniz"
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üye Soyadını Giriniz"
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üye Yaşını Giriniz"
        onChangeText={setUserAge}
      />
      <Input
        label="Üye e-posta"
        placeholder="Üye e-postasını Giriniz"
        onChangeText={setUserEmail}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </View>
  );
};

export default MemberSign;

const styles = StyleSheet.create({});
