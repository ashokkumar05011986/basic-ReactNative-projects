import {SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import {styles} from './Login.styles';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {Formik} from 'formik';

const Login = () => {
  function handleLogin(values) {
    console.log(values);
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
            <Input
              placeholder="Şifrenizi giriniz"
              value={values.password}
              onType={handleChange('password')}
            />
            <Button text="GİRİŞ YAP" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
