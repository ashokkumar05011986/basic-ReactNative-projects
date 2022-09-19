import {SafeAreaView, View, Image, Alert} from 'react-native';
import React from 'react';
import {styles} from './Login.styles';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    console.log('values-->', values);
    // e.preventDefault();
    post(Config.API_AUTH_URL + '/login', values);
  }
  if (error) {
    Alert.alert('Dükkan', 'Bir hata oluştu!');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı bulunamadı!');
    } else {
      navigation.navigate('ProductsScreen');
    }
    console.log('data -->', data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assest/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adını giriniz"
              value={values.username}
              onType={handleChange('username')}
            />
            {/* <Icon name="key" size={30} /> */}
            <Input
              placeholder="Şifrenizi giriniz"
              value={values.password}
              onType={handleChange('password')}
              isSecure
            />
            <Button text="GİRİŞ YAP" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
