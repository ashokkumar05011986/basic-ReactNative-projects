import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    // width: Dimensions.get('window').width,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {color: 'black', fontWeight: 'bold', fontSize: 18},
  description: {
    marginTop: 10,
  },
  innerContainer: {
    padding: 5,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
