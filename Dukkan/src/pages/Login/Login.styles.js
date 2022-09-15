import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#64b5f6'},
  logo: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center',
    tintColor: 'white',
  },
  logo_container: {
    flex: 1,
    paddingRight: 50,
    justifyContent: 'center',
  },
  body_container: {
    flex: 1,
  },
});
