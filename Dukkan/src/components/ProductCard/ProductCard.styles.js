import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    // height: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    // backgroundColor: 'red',
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    color: 'black',
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default styles;
